Find URL params

website: "http://www.example.com/t.html?[param1]={value1}&[param2]={value2}&[param3]={value}"

JS:
var url_string = document.URL;
var url = new URL(url_string);
var paramToFind = 'param1';
var paramValue = url.searchParams.get(paramToFind);				//keys(): return key list


Apex:	System.currentPageReference().getParameters().get('param1');

JS > Apex (better)

==========================================

last element after slash

url.split("/").pop()

