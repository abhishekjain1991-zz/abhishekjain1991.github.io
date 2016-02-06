import os
import json

file_types = {".c":"C", ".cpp":"C++", ".py":"Python", ".java":"JAVA",
			".html":"HTML",".css":"CSS","js":"Javascipt","jam":"Jamfile","make":"Makfile",
			".pl":"Perl",".h":"C header file",".sh":"Shell",".xml":"XML",".cfg":"Configuration",
			".yml":"YAML","Dockerfile":"Dockerfile",".m":"Matlab",".cs":"C#",".unity":"UNITY",".shader":"Shader",".cu":"Cuda"
			} 

file_type_to_ignore = [".pdf",".doc",".docx",".xl",".png",".jpg",".txt",".op",".trace","~",".bmp",".md",".tar",".gz",".meta",".class",".csv",".min.js"
					  ".min.css","bootstrap","json","jquery",".jar",".mtl"]
g_count = 0
g_file_count = 0 
def get_dir_and_file_details():
	process = os.popen("ls -l")
	ls_file_list = process.read()
	process.close()
	file_list_array = ls_file_list.split('\n')
	file_list_array = file_list_array[1:len(file_list_array)-1]
	dir_list =[]
	file_list = []
	
	for elements in file_list_array:
		ignoreflag = 0
		for ignoreeles in file_type_to_ignore:
			if(ignoreeles.lower() in elements.lower()):
				ignoreflag = 1
				break
		if(ignoreflag):
			continue
		if("d" not in elements.split('@')[0]):
			file_list.append(elements[::-1].split(' ')[0][::-1])
		else:
			dir_list.append(elements[::-1].split(' ')[0][::-1])
		
	return [file_list , dir_list]

def do_form_root(path_to_dir):
	global g_count
	global g_file_count
	dir_details = {}
	size_till_now = 0
	os.chdir("./"+path_to_dir)
	if(not g_count):
		path_to_dir = 'root'
		g_count =1
		dir_details = {"name":path_to_dir,"children":[],"size":0,"nbfiles":0}
	else:
		dir_details = {"name":path_to_dir,"children":[],"size":0}
	child_details = get_dir_and_file_details()
	#for all files in current directory
	for files in child_details[0]:
		process = os.popen("wc -l "+files)
		file_detail = process.read()
		process.close()
		file_detail =  file_detail[::-1]
		file_name = file_detail.split(' ')[0][::-1].replace('\n','')
		file_size = int(file_detail.split(' ')[1][::-1].replace(' ',''))
		language = "Other"
		for file_type in sorted(file_types, reverse = True):
			if file_type.lower() in file_name.lower():
				language = file_types[file_type]
				break
		if(language is  "Other"):
			continue
		size_till_now = size_till_now + file_size
		dir_details['children'].append({"name":file_name, "type":language, "size":file_size})
		g_file_count += 1
	dir_details['size'] = size_till_now
	#for all directories
	for dirs in child_details[1]:
		child_dir_info = do_form_root(dirs)
		if(len(child_dir_info[0]["children"])):
			dir_details['children'].append(child_dir_info[0])
			size_till_now  = size_till_now + child_dir_info[1]
			g_file_count += 1
	os.chdir('../')
	dir_details['size'] = size_till_now
	return [dir_details,size_till_now]

def main():

	final_dict = do_form_root("../")[0];
	final_dict["nbfiles"] = g_file_count
	jsonarray = json.dumps(final_dict)
	print jsonarray

if __name__ == "__main__":
	main()
