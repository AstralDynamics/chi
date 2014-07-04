import xml.etree.ElementTree as ET
from lxml import etree as ET
from glob import glob

CLASS_GRIDING = {
	'label' : 'large-2 small-4 columns',
	'input' : 'large-10 small-8 columns'
}

def get_form(data):
	return data[data.find('<form'):data.find('</form>') + 7]

def get_head(data):
	return data[:data.find('<form')]

def process_file(filename):
	with open(filename) as f:
		data = f.read()
		head = get_head(data)
		form = get_form(data)
		root = ET.fromstring(form)

		for div in root.findall("div[@class='control']")[::-1]:
			stuff = []

			for element in div.getchildren():
				if element.tag not in CLASS_GRIDING:
					continue
				wrapper = ET.Element('div')
				wrapper.attrib['class'] = CLASS_GRIDING[element.tag]
				wrapper.append(element)
				stuff.append((element, wrapper))

			root.remove(div)
			for label, wrapper in stuff:
			#	div.remove(label) re
				div.append(wrapper)
			root.insert(0, div)

		out = head + ET.tostring(root, encoding='unicode', method='xml', pretty_print=True)

	with open(filename, 'w') as f:
		f.write(out) 

def main():

	out = ""

	files = glob('*.html')

	failed = []

	for file in files:
		print('working in ', file)
		try:
			process_file(file)
		except ET.XMLSyntaxError as e:
			failed.append('Failed to convert {} due to {}'.format(file, e))
			

	print('Converted ', len(files) - len(failed), ' out of ', len(files))
	for message in failed:
		print(message)

if __name__ == '__main__':
	main()