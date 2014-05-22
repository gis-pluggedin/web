## Open Sourcing A City GIS Web Site
=======================

Currently, the City of Williamsburg [offers it's GIS data](http://www.williamsburgva.gov/Index.aspx?page=793) as a downloadable zipped shapefile. The city's current GIS site is an [ArcGIS Flex Viewer](http://williamsburg.timmons.com/flex/index.html) implementation. The purpose of this project was to replicate the base functionality of the city's current website using open source components.  

This site uses:  
* Leaflet API
* Tiles Created With Tilemill
* GIS Data as GeoJSON
* Web Application With GitHub Pages


#### [Click Here!](http://gis-pluggedin.github.io/web/) view the live implementation.

=======================  
#### ToDo

* Add Virginia Orthophotography [REST Service](http://gismaps.vita.virginia.gov/arcgis/rest/services/MostRecentImagery/MostRecentImagery_Lambert/MapServer) As Secondary Basemap  
* Implement Vector Tiles With Tilemill 2  
* Add Search Capability For Parcels, Addresses
* Add Elevation Data Or Lidar From Either USDA Or [OpenTopography.Org](http://opentopo.sdsc.edu/gridsphere/gridsphere?cid=datasets)
* Add More Themes From vagAvailable City Layers

=======================  
#### Background  
This project was created by [Chris Fricke](https://github.com/bmoregeo), [Corey Fields](https://github.com/fieldsco), and [Jonah Adkins](https://github.com/jonahadkins) as part of a [GISi](http://gisinc.com/) sponsored 24 hour hack-a-thon for employees.

##### What Worked
* Open Data!
* 
  

###### What Didn't Work
* Koop
  * Major Node dependency isssues with standing Koop up on Ubuntu 14.04 on an Amazon micro instance.
  * Overwhelmed Esri DC R&D center's server.

