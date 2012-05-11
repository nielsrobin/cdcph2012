<Query Kind="Program">
  <Reference Relative="..\..\..\..\Demo scripts Sprint28\JsonFx.dll">C:\Dropbox\Demo scripts Sprint28\JsonFx.dll</Reference>
  <Reference Relative="..\..\..\..\Demo scripts Sprint28\EasyHttp.dll">C:\Dropbox\Demo scripts Sprint28\EasyHttp.dll</Reference>
  <Namespace>System.Globalization</Namespace>
  <Namespace>EasyHttp.Http</Namespace>
</Query>

void Main()
{
	var http = new HttpClient();
	HttpResponse response = http.Put("http://10.36.1.103:8888/products/E100", new { name = "Eel", price = 60 },"application/json");
	response.Dump();
}