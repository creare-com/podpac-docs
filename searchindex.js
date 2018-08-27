Search.setIndex({docnames:["developer/contributing","developer/design","developer/docs","developer/specs/caching","developer/specs/coordinates","developer/specs/data-source","developer/specs/interpolation","developer/specs/nodes","developer/specs/pipelines","developer/specs/user_stories","examples","index","install","roadmap","user/api","user/api-min","user/api-min/podpac.core.authentication.EarthDataSession","user/api-min/podpac.core.compositor.Compositor","user/api-min/podpac.core.compositor.OrderedCompositor","user/api-min/podpac.core.node.Node","user/api-min/podpac.core.node.Style","user/api-min/podpac.settings","user/api/podpac.core.authentication","user/api/podpac.core.compositor","user/api/podpac.core.coordinate.coord","user/api/podpac.core.coordinate.coordinate","user/api/podpac.core.coordinate.util","user/api/podpac.core.data.data","user/api/podpac.core.data.interpolate","user/api/podpac.core.data.type","user/api/podpac.core.node","user/api/podpac.core.pipeline","user/api/podpac.core.units","user/api/podpac.core.utils","user/api/podpac.datalib.airmoss","user/api/podpac.datalib.smap","user/coordinates","user/earthdata","user/nodes","user/pipelines","user/references","why-podpac"],envversion:53,filenames:["developer/contributing.md","developer/design.rst","developer/docs.md","developer/specs/caching.md","developer/specs/coordinates.md","developer/specs/data-source.md","developer/specs/interpolation.md","developer/specs/nodes.md","developer/specs/pipelines.md","developer/specs/user_stories.md","examples.md","index.rst","install.md","roadmap.md","user/api.rst","user/api-min.rst","user/api-min/podpac.core.authentication.EarthDataSession.rst","user/api-min/podpac.core.compositor.Compositor.rst","user/api-min/podpac.core.compositor.OrderedCompositor.rst","user/api-min/podpac.core.node.Node.rst","user/api-min/podpac.core.node.Style.rst","user/api-min/podpac.settings.rst","user/api/podpac.core.authentication.rst","user/api/podpac.core.compositor.rst","user/api/podpac.core.coordinate.coord.rst","user/api/podpac.core.coordinate.coordinate.rst","user/api/podpac.core.coordinate.util.rst","user/api/podpac.core.data.data.rst","user/api/podpac.core.data.interpolate.rst","user/api/podpac.core.data.type.rst","user/api/podpac.core.node.rst","user/api/podpac.core.pipeline.rst","user/api/podpac.core.units.rst","user/api/podpac.core.utils.rst","user/api/podpac.datalib.airmoss.rst","user/api/podpac.datalib.smap.rst","user/coordinates.md","user/earthdata.md","user/nodes.md","user/pipelines.md","user/references.md","why-podpac.md"],objects:{"podpac.core":{authentication:[22,0,0,"-"],compositor:[23,0,0,"-"],node:[30,0,0,"-"],pipeline:[31,0,0,"-"],units:[32,0,0,"-"],utils:[33,0,0,"-"]},"podpac.core.authentication":{EarthDataSession:[22,1,1,""],SessionWithHeaderRedirection:[22,1,1,""]},"podpac.core.authentication.EarthDataSession":{__init__:[16,2,1,""]},"podpac.core.authentication.SessionWithHeaderRedirection":{rebuild_auth:[22,2,1,""],update_login:[22,2,1,""]},"podpac.core.compositor":{Compositor:[23,1,1,""],OrderedCompositor:[23,1,1,""]},"podpac.core.compositor.Compositor":{__init__:[17,2,1,""],composite:[23,2,1,""],definition:[23,3,1,""],execute:[23,2,1,""],get_native_coordinates:[23,2,1,""],get_shared_coordinates:[23,2,1,""],get_source_coordinates:[23,2,1,""],iteroutputs:[23,2,1,""]},"podpac.core.compositor.OrderedCompositor":{__init__:[18,2,1,""],composite:[23,2,1,""]},"podpac.core.coordinate":{coord:[24,0,0,"-"],coordinate:[25,0,0,"-"],util:[26,0,0,"-"]},"podpac.core.coordinate.coord":{BaseCoord:[24,1,1,""],Coord:[24,1,1,""],MonotonicCoord:[24,1,1,""],UniformCoord:[24,1,1,""],coord_linspace:[24,4,1,""]},"podpac.core.coordinate.coord.BaseCoord":{add:[24,2,1,""],area_bounds:[24,3,1,""],bounds:[24,3,1,""],concat:[24,2,1,""],coordinates:[24,3,1,""],dtype:[24,3,1,""],intersect:[24,2,1,""],is_datetime:[24,3,1,""],is_descending:[24,3,1,""],is_monotonic:[24,3,1,""],kwargs:[24,3,1,""],rasterio_regularity:[24,3,1,""],scipy_regularity:[24,3,1,""],select:[24,2,1,""],size:[24,3,1,""]},"podpac.core.coordinate.coord.Coord":{is_datetime:[24,3,1,""],is_descending:[24,3,1,""],is_monotonic:[24,3,1,""],rasterio_regularity:[24,3,1,""],scipy_regularity:[24,3,1,""],size:[24,3,1,""]},"podpac.core.coordinate.coord.MonotonicCoord":{bounds:[24,3,1,""],is_descending:[24,3,1,""],is_monotonic:[24,3,1,""]},"podpac.core.coordinate.coord.UniformCoord":{bounds:[24,3,1,""],coords:[24,3,1,""],is_datetime:[24,3,1,""],is_descending:[24,3,1,""],is_monotonic:[24,3,1,""],rasterio_regularity:[24,3,1,""],scipy_regularity:[24,3,1,""],size:[24,3,1,""]},"podpac.core.coordinate.coordinate":{BaseCoordinate:[25,1,1,""],Coordinate:[25,1,1,""],convert_xarray_to_podpac:[25,4,1,""]},"podpac.core.coordinate.coordinate.Coordinate":{add_unique:[25,2,1,""],coords:[25,3,1,""],delta:[25,3,1,""],dims:[25,3,1,""],drop_dims:[25,2,1,""],gdal_crs:[25,3,1,""],get_dims_map:[25,2,1,""],get_shape:[25,2,1,""],intersect:[25,2,1,""],is_stacked:[25,3,1,""],iterchunks:[25,2,1,""],kwargs:[25,3,1,""],replace_coords:[25,2,1,""],shape:[25,3,1,""],stack:[25,2,1,""],stack_dict:[25,2,1,""],transpose:[25,2,1,""],unstack:[25,2,1,""],unstack_dict:[25,2,1,""]},"podpac.core.coordinate.util":{add_coord:[26,4,1,""],get_timedelta:[26,4,1,""],get_timedelta_unit:[26,4,1,""],make_coord_delta:[26,4,1,""],make_coord_value:[26,4,1,""],make_timedelta_string:[26,4,1,""]},"podpac.core.data":{data:[27,0,0,"-"],interpolate:[28,0,0,"-"],type:[29,0,0,"-"]},"podpac.core.data.data":{DataSource:[27,1,1,""]},"podpac.core.data.data.DataSource":{definition:[27,3,1,""],execute:[27,2,1,""],get_data:[27,2,1,""],get_data_subset:[27,2,1,""],get_native_coordinates:[27,2,1,""],interpolate_irregular_grid:[27,2,1,""],interpolate_point_data:[27,2,1,""],rasterio_interpolation:[27,2,1,""]},"podpac.core.data.interpolate":{InterpolationException:[28,5,1,""],InterpolationPipeline:[28,1,1,""],Interpolator:[28,1,1,""],NearestNeighbor:[28,1,1,""],OptimalInterpolation:[28,1,1,""],Radial:[28,1,1,""],Rasterio:[28,1,1,""],ScipyGrid:[28,1,1,""],ScipyPoint:[28,1,1,""]},"podpac.core.data.interpolate.InterpolationPipeline":{kwargs:[28,3,1,""]},"podpac.core.data.interpolate.Interpolator":{source_coords_subset:[28,2,1,""],validate:[28,2,1,""]},"podpac.core.data.type":{NumpyArray:[29,1,1,""],PyDAP:[29,1,1,""],RasterioSource:[29,1,1,""],ReprojectedSource:[29,1,1,""],S3Source:[29,1,1,""],WCS:[29,1,1,""]},"podpac.core.data.type.NumpyArray":{get_data:[29,2,1,""]},"podpac.core.data.type.PyDAP":{get_data:[29,2,1,""],get_native_coordinates:[29,2,1,""],keys:[29,3,1,""]},"podpac.core.data.type.RasterioSource":{band_count:[29,3,1,""],band_descriptions:[29,3,1,""],band_keys:[29,3,1,""],close_dataset:[29,2,1,""],get_band_numbers:[29,2,1,""],get_data:[29,2,1,""],get_native_coordinates:[29,2,1,""]},"podpac.core.data.type.ReprojectedSource":{base_ref:[29,3,1,""],definition:[29,3,1,""],get_data:[29,2,1,""],get_native_coordinates:[29,2,1,""]},"podpac.core.data.type.S3Source":{get_data:[29,2,1,""],native_coordinates:[29,3,1,""]},"podpac.core.data.type.WCS":{base_ref:[29,3,1,""],get_capabilities_url:[29,3,1,""],get_data:[29,2,1,""],native_coordinates:[29,3,1,""]},"podpac.core.node":{Node:[30,1,1,""],NodeException:[30,5,1,""],Style:[30,1,1,""]},"podpac.core.node.Node":{__init__:[19,2,1,""],base_definition:[30,2,1,""],base_ref:[30,3,1,""],cache_dir:[30,3,1,""],cache_obj:[30,2,1,""],cache_path:[30,2,1,""],clear_disk_cache:[30,2,1,""],copy_output_array:[30,2,1,""],definition:[30,3,1,""],evaluated_hash:[30,3,1,""],execute:[30,2,1,""],get_hash:[30,2,1,""],get_image:[30,2,1,""],get_output_coords:[30,2,1,""],get_output_dims:[30,2,1,""],get_output_path:[30,2,1,""],get_output_shape:[30,2,1,""],init:[30,2,1,""],initialize_array:[30,2,1,""],initialize_coord_array:[30,2,1,""],initialize_output_array:[30,2,1,""],latlon_bounds_str:[30,3,1,""],load:[30,2,1,""],load_cached_obj:[30,2,1,""],pipeline:[30,3,1,""],pipeline_definition:[30,3,1,""],pipeline_json:[30,3,1,""],shape:[30,3,1,""],write:[30,2,1,""]},"podpac.core.node.Style":{__init__:[20,2,1,""]},"podpac.core.units":{Units:[32,1,1,""],UnitsDataArray:[32,1,1,""],UnitsNode:[32,1,1,""]},"podpac.core.units.Units":{validate:[32,2,1,""]},"podpac.core.units.UnitsDataArray":{cumsum:[32,2,1,""],max:[32,2,1,""],mean:[32,2,1,""],min:[32,2,1,""],part_transpose:[32,2,1,""],set:[32,2,1,""],sum:[32,2,1,""],to:[32,2,1,""],to_base_units:[32,2,1,""]},"podpac.core.units.UnitsNode":{validate:[32,2,1,""]},"podpac.core.utils":{cached_property:[33,4,1,""],clear_cache:[33,4,1,""],common_doc:[33,4,1,""],get_settings_file:[33,4,1,""],load_setting:[33,4,1,""],save_setting:[33,4,1,""]},"podpac.datalib":{airmoss:[34,0,0,"-"],smap:[35,0,0,"-"]},"podpac.datalib.airmoss":{AirMOSS:[34,1,1,""],AirMOSS_Site:[34,1,1,""],AirMOSS_Source:[34,1,1,""]},"podpac.datalib.airmoss.AirMOSS":{get_available_sites:[34,2,1,""]},"podpac.datalib.airmoss.AirMOSS_Site":{get_available_dates:[34,2,1,""],get_native_coordinates:[34,2,1,""]},"podpac.datalib.airmoss.AirMOSS_Source":{get_data:[34,2,1,""],get_native_coordinates:[34,2,1,""]},"podpac.datalib.smap":{SMAP:[35,1,1,""],SMAPBestAvailable:[35,1,1,""],SMAPDateFolder:[35,1,1,""],SMAPPorosity:[35,1,1,""],SMAPProperties:[35,1,1,""],SMAPSource:[35,1,1,""],SMAPWilt:[35,1,1,""],np2smap_date:[35,4,1,""],smap2np_date:[35,4,1,""]},"podpac.datalib.smap.SMAP":{base_ref:[35,3,1,""],definition:[35,3,1,""],get_available_times_dates:[35,2,1,""],get_partial_native_coordinates_sources:[35,2,1,""],get_shared_coordinates:[35,2,1,""],get_source_coordinates:[35,2,1,""],keys:[35,3,1,""],source:[35,3,1,""]},"podpac.datalib.smap.SMAPBestAvailable":{get_shared_coordinates:[35,2,1,""]},"podpac.datalib.smap.SMAPDateFolder":{get_available_coords_sources:[35,2,1,""],get_shared_coordinates:[35,2,1,""],get_source_coordinates:[35,2,1,""],keys:[35,3,1,""],source:[35,3,1,""]},"podpac.datalib.smap.SMAPProperties":{get_native_coordinates:[35,2,1,""]},"podpac.datalib.smap.SMAPSource":{get_available_times:[35,2,1,""],get_data:[35,2,1,""],get_native_coordinates:[35,2,1,""],latkey:[35,3,1,""],lonkey:[35,3,1,""],product:[35,3,1,""]},podpac:{settings:[21,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception"},terms:{"3rd":0,"5th":4,"boolean":[4,17,23,25,27,29,35,39],"break":13,"byte":3,"case":[0,13,17,23,27,32,35],"class":[0,1,4,15,16,17,18,19,20,22,23,24,25,27,28,29,30,32,34,35,37,38,39],"default":[0,4,5,13,17,19,23,24,25,27,29,30,35,38,39],"enum":[4,5],"final":[9,19,30],"float":[4,19,24,25,26,30,35,38],"function":[0,1,3,5,13,15,19,24,25,26,28,30,33,35],"import":[10,35,37,39],"int":[0,4,5,17,23,25,29],"long":[0,17,23],"new":[0,4,5,12,17,23,24,25,26,27,35,38],"return":[0,4,5,17,18,19,22,23,24,25,26,27,28,29,30,32,33,34,35,39],"static":[2,3],"true":[5,17,19,23,24,25,27,30,35,38,39],"try":[0,5,12],"var":0,"while":[0,3,4],AWS:[1,3,11,13,41],Adding:0,And:[0,2],But:3,CRS:4,For:[0,3,4,12,13,17,23,24,25,32,35,36,37,38,39],GIS:0,IDE:0,Not:[10,19,24,30],One:[17,23],The:[0,1,2,3,4,5,10,11,12,13,17,19,23,24,25,26,27,29,30,35,36,38,39],Then:[2,37],There:[0,41],These:[0,5,12,39],Use:11,Used:35,Uses:[3,19,29,30,35],Using:[3,37],WCS:[5,10,29],With:22,__doc__:33,__init__:[0,16,17,18,19,20],_ca:4,_cl:4,_cl_lat:4,_cm:4,_cm_time:4,_cu:4,_cu_lat:4,_cualt:4,_culat:4,_culon:4,_determine_source_coordin:5,_interpol:5,_interpolate_coordin:5,_intersect_coordin:5,_post_get_data:5,_pre_get_data:5,_stack:4,_static:2,_templat:2,abil:[3,41],abl:[3,38],about:[0,3],abov:[0,3,4],abss:3,academ:41,accept:0,access:[0,1,3,5,10,11,13,22,29,35,37,41],accomplish:3,account:[3,10,41],accur:[17,20,23],across:[3,35,41],activ:[12,41],actual:[0,4,17,23,29],adapt:0,add:[0,2,3,4,5,6,7,8,9,13,24,26,35],add_coord:26,add_dim:4,add_uniqu:25,added:26,adding:[3,26],addit:[0,3,4,19,25,30,37,38],address:[22,41],adher:0,advanc:[0,41],advic:5,affect:5,affin:29,after:[3,5,12,17,19,23,29,30,35],against:29,agenc:41,aim:41,airmoss_sit:34,airmoss_sourc:34,aka:3,alglib:[0,1],algorithm:[0,1,3,10,11,19,30,41],alia:5,alias:4,align:4,all:[0,2,4,5,10,12,15,17,19,23,24,25,27,29,30,35],all_cach:[19,30],alloc:[17,19,23,27,30],allow:[4,5,13,17,23,39],allow_non:[32,38],allow_pickl:39,along:[24,25,27,39],alreadi:0,also:[0,4,5,17,19,23,26,29,30,38,39,41],alt:[4,29],altern:5,alwai:[0,3],amazon:41,america:3,amongst:[17,23],ams2018:40,anaconda:12,analys:41,analysi:[3,11,35,41],analyt:41,ani:[0,5,17,19,23,25,27,29,30,35],anonym:0,anoth:[4,29,39],api:[2,11],app:37,appear:[18,23],append:13,appli:3,applic:37,approach:41,appropri:5,approv:37,arbitrari:[4,5],architectur:[11,41],archiv:[3,37,41],area:[4,29],area_bound:[4,24],arg:[3,20,24,25,28,30,32],argument:[19,29,30,39],arithmet:39,arr:[19,30],arrai:[0,3,4,5,17,19,23,24,25,26,27,29,30,32,35,38],array_lik:0,artifact:0,ascend:24,aspect:41,assign:[19,30],associ:[35,39],assum:[0,12,35],attent:[27,29,35],attr:[19,30,32,33,38,39],attribut:[13,16,17,18,19,20,22,23,25,27,30,34],auth:22,auth_class:[29,35],auth_host:[16,22],auth_sess:[29,35,37],authent:[29,35,37],author:37,auto:[0,2,5],autobuild:2,autodoc:2,autodoc_default_flag:14,autodocstr:0,autogen:[2,14],autogener:[14,15],autom:13,automat:[2,5,13,14,17,19,23,29,30,37,41],avail:[0,3,4,29,35,38,41],available_interpol:28,averag:[5,29],avoid:0,awar:[17,18,19,23,27,30],aws:[17,19,23,27,30],back:[0,3],backblaz:5,backward:[13,24],badexcept:0,balanc:3,band:29,band_count:29,band_descript:29,band_kei:29,barrier:41,base64:[19,30],base:[1,4,5,17,18,19,23,24,25,26,27,29,30,35,38,39,41],base_definit:[19,30],base_defit:[19,30],base_dir_url:34,base_ref:[19,29,30,35],base_url:[34,35],basecoord:24,basecoordin:25,basic:[3,5,24,28,39],bass:3,becaus:[0,10,17,23,24,26,29],becom:3,been:[19,30],befor:[5,39],behav:[4,13],behavior:39,being:[0,19,29,30,35],below:[0,14,39],benefit:[0,41],best:[27,29,35],better:3,between:[24,25,35],beyond:24,bilinear:[5,39],bilinearli:29,binari:3,bleed:12,bool:[17,19,21,23,24,27,30,35,39],both:[0,35,41],bottleneck:3,bottom:37,bound:[4,19,24,25,30],box:[4,24],bracket:0,branch:[0,12],browser:2,bucket:[3,5,29],bug:0,builtin:39,button:37,cach:[2,3,13,17,19,23,30,35],cache_cir:0,cache_dir:[19,30],cache_native_coordin:[17,23,35],cache_obj:[19,30],cache_path:[19,30],cache_to_s3:21,cache_typ:[19,30],cached_properti:[3,33],cachei:3,calcul:[3,4,5,17,23,24],california:3,call:[3,5,26,27,29,35],caller:3,can:[0,3,4,5,10,11,17,19,23,26,27,28,29,30,35,37,38,39],cannot:[19,26,28,29,30,35],capabl:[29,41],captur:1,care:3,cast:[4,24,26],cell_elev:35,cell_land_fract:35,central:3,certain:4,certiain:4,cfg:0,chang:[0,2,3,17,23,33],channel:12,charact:26,check:[0,4,35],check_dim_repeat:25,checkout:[0,12],cherri:15,child:[5,27,29,37],children:[17,19,23,27,30],choic:0,choos:[27,29,35],chunk:25,cite:0,clear:[19,30],clear_cach:33,clear_disk_cach:[19,30],click:37,client:0,clim:[20,30],close:[29,41],close_dataset:29,cloud:[1,11,19,30,41],clsm_cdcr1:35,clsm_cdcr2:35,clsm_dzgt1:35,clsm_dzgt2:35,clsm_dzgt3:35,clsm_dzgt4:35,clsm_dzgt5:35,clsm_dzgt6:35,clsm_dzpr:35,clsm_dzrz:35,clsm_dzsf:35,clsm_dztsurf:35,clsm_poro:35,clsm_wp:35,cluster:3,cmap:[20,30],code:[2,12,19,30,37,41],collabor:[11,41],colormap:[19,30,39],com:[12,22],combin:[4,11,18,23],command:0,comment:0,commerci:41,commit:0,common:[4,17,19,23,26,30],common_doc:[0,33],common_parameters_listed_abov:0,commond:33,commun:[0,3,13,41],compat:[0,13,24,27,29,35],complet:[17,23],complex:[0,3,41],complic:5,complient:29,composit:[11,17,18,23,39],compositor:[0,19,30,35],comput:[0,3,11,12,35,41],concat:[4,24],concaten:[4,24,25],concern:29,conda:2,conf:2,config:[14,32],configur:[0,2],conjunct:3,consid:4,consist:0,construct:[17,23,29,35],contain:[0,1,4,17,18,19,23,27,29,30,35],contribut:[11,13],control:0,contruct:5,contructor:5,conveni:[35,37],convert:[0,2,24,25,26,35],convert_xarray_to_podpac:25,convienc:2,convolut:13,coodin:4,coord:[4,10,19,25,30,32,38],coord_linspac:24,coord_ref_si:[4,24,25],coordin:[0,5,9,10,11,13,17,19,23,27,28,29,30,34,35],coordinate1d:4,coordinates_index:[5,27,29,34,35],coordinates_sourc:29,coordint:4,coords_copi:4,coords_dst:27,coords_src:27,coorind:0,copi:[2,4,19,25,30],copy_output_arrai:[19,30],core:[0,1,12,37,38,39],correct:[0,17,19,23,25,26,27,30,35],correspond:[25,35],cost:3,cost_func:28,cost_setup:28,cost_tol:28,could:[0,3,5,15,17,23,35],cov:0,cover:35,coverag:13,coveral:0,crear:12,creat:[0,3,4,5,10,12,19,29,30,36,38],creation:13,credenti:35,creep:0,criteria:29,crs:29,ctype:[4,24,25],cubic:5,cumsum:32,current:[17,19,23,27,30,36,41],custom:[0,13,24,39],dai:[17,23,26],dalta:26,dap:29,dask:[3,13,41],data:[0,1,3,4,5,9,10,11,13,17,19,22,23,30,32,35,36,38,39,41],data_dst:27,data_src:27,data_subset:5,dataarrai:[4,17,18,19,23,25,27,30,32,35],dataarraycoordin:25,databas:3,datafram:3,datakei:[29,34,35],datalib:[0,1,10,39],dataset:[5,17,23,29,35,37],datasettyp:29,datasourc:[0,3,13,17,19,23,27,29,30,35],datasubset:27,datatyp:[12,19,30],date:[9,17,23,26,35],date_file_url_r:35,date_time_file_url_r:35,date_time_url_r:35,date_url_r:[34,35],datetim:[3,24,26],datetime64:[4,24,26,35],deal:[35,41],debug:3,decid:0,decor:33,decreas:24,def:[0,5,39],default_valu:[32,38],defin:[0,3,4,5,17,19,23,24,27,29,30,35,36,38,39],definit:[3,5,13,17,19,23,27,29,30,35,38],definition_return:[19,30],defint:[17,23,27],degre:[35,41],delet:[3,19,30],delta:[4,24,25,26],demo:9,demonstr:1,depend:[4,5,12,27,29],dependson:3,deploi:41,deploy:1,deprec:[19,25,30],deriv:[17,19,23,27,29,30],descend:24,describ:[0,4,17,23,27,29,35,38,39],descrip:[19,30],descript:[0,16,17,18,20,21,22,23,24,25,26,27,28,29,30,32,33,34,35],design:[11,38],desir:[17,19,23,30],destin:[28,39],detail:[0,4,27,29,35,37,38],detect:2,determin:[5,17,19,23,29,30],deval:12,develop:[10,11,13,17,23,27,36,41],developerspec:38,dict:[4,19,25,29,30,33,35],dictioari:[19,30],dictionari:[3,4,5,17,19,23,24,25,27,30,33,39],differ:[3,4,17,23,26,29,35,41],dill:3,dim:[4,5,19,25,30,32],dimens:[13,17,19,23,24,25,27,29,30,35],dimension:26,dims_map:25,dir:0,direct:[4,14],directli:[27,29,41],directori:[0,1,2,3,19,30],disciplin:0,discrib:[19,30],disjoint:41,disk:[3,19,29,30,35],dispar:41,displai:[19,22,30],dist:1,distance_unit:4,distribut:[2,3,12,41],divid:24,divisor:26,dlat:4,dlon:4,doc:[1,2],doc_dict:33,docstr:[2,33],doctest:[0,2,25],doctr:[13,33],document:[0,1,11,13,14,15,38],doe:[0,3,4,17,23,35],doesn:[3,5,19,29,30],doing:29,domain:[0,1],don:5,done:0,down:[17,23],download:29,downsampl:4,downscaled_sm:39,driven:3,drop:[0,4],drop_dim:[4,25],dtype:[4,19,24,30,35],due:[4,41],duplic:25,dure:[2,13],each:[2,4,13,17,23,24,25,35,37,38,39],earth:[10,11,35,41],earthdata:[22,29,35],earthdatasess:[22,35,37],eas:4,easi:41,easier:[0,15],ecs:35,edg:12,editor:0,eds:37,effici:[17,23,27,28,29,35],either:[0,4,29,37],element:4,els:24,empti:[4,19,24,30,35],enabl:[13,37,41],encod:[19,30,32],encompass:41,encount:12,encourag:0,end:[4,13,24],endpoint:[13,29],enter:[2,37],entir:[17,19,23,30],entri:2,enumeration_color:[20,30],enumeration_legend:[20,30],environ:1,environment:0,eosdi:41,epsg:[24,29],eqn:39,equal:29,equival:[4,39],error:[19,29,30],esa:41,especi:[17,23],essenti:[1,35],etc:[0,2,4,17,19,23,27,30],eval_coord:28,evalu:[13,17,19,23,29,30],evaluated_coordin:[19,30],evaluated_hash:[19,30],even:[0,4],everi:[4,17,23,35,37],everyth:[13,17,19,23,30],exactli:5,exampl:[0,1,11,17,22,23,26,27,35,36,37,39],exce:[26,41],excel:41,except:[4,19,28,29,30],execut:[3,5,10,13,17,18,19,23,27,29,30,35,36,38,39,41],exist:[4,5,12,19,30,41],expand:13,expect:[19,30,35,38],experi:12,expert:0,expertis:41,expir:[3,13],expiresin:3,explan:0,explicit:4,explicitli:4,exploit:41,explor:41,expos:0,express:35,extend:[0,3,5,19,30],extent:[4,24],extract:[26,35],extrapol:28,face:0,facilit:[4,11],fact:[3,41],fail:[0,5],fairli:0,fall:3,fals:[17,19,23,24,25,30,32,35,38,39],famili:35,faster:[17,23],fastpath:32,featur:0,feed:29,feet:4,fetch:29,few:[5,17,23,27],fewer:24,field:33,fifthfunc:0,figur:3,file:[0,2,3,5,16,19,26,29,30,35,37,39],file_handl:29,file_url_r:35,file_url_re2:35,filenam:[19,30,35],filepath:[5,27],filesystem:3,fill:[4,17,23],fillval:[5,19,30],find:[29,35,37],first:[0,17,23,35],fit:29,fix:[13,39],fix_import:39,fixed_ord:28,flag:[17,19,23,30],flat:5,float64:4,focu:[11,32],folder:[17,23,35],folder_d:35,follow:[0,1,2,4,10,13,37],folow:4,forc:3,forecast:3,forg:12,fork:0,form:26,format:[0,2,5,13,19,30,33,35,39,41],formula:3,found:[10,38,39],fourthfunc:0,framework:41,free:4,frequenc:3,from:[0,2,3,4,5,12,16,19,22,25,26,27,28,29,30,35,37,39,41],full:[0,14,19,24,30,39],func:33,fusion:41,futur:[3,19,30],fuzzi:0,gauss:5,gdal:25,gdal_cr:25,gener:[0,1,2,3,4,10,13,18,23,27,29,32,35],geodet:4,geodic:29,geohash:3,geopanda:41,geoscienc:0,geoserv:5,geospati:[3,11,13,41],geotif:39,geotiff:[3,5,29],gesdic:37,get:[0,3,4,5,9,11,17,19,22,23,24,26,27,29,30,35],get_available_coords_sourc:35,get_available_d:34,get_available_sit:34,get_available_tim:35,get_available_times_d:35,get_band_numb:29,get_capabilities_url:29,get_data:[5,27,29,34,35],get_data_subset:27,get_descript:[19,30],get_dim:4,get_dims_map:25,get_hash:[19,30],get_imag:[19,30],get_native_coordin:[5,17,23,27,29,34,35],get_output_coord:[19,30],get_output_dim:[19,30],get_output_path:[19,30],get_output_shap:[19,30],get_partial_native_coordinates_sourc:35,get_settings_fil:33,get_shap:25,get_shared_coordin:[17,23,35],get_source_coordin:[17,23,35],get_timedelta:26,get_timedelta_unit:26,git:[0,12,13],github:[0,11,12],give:[4,18,23,27,29,35],given:[4,5,19,24,25,30,35],global:35,goal:0,goe:0,going:0,gov:22,graph:3,greatli:41,greek:0,grid:[4,27,35],group:[0,13],groupcoordin:[17,23],guarante:[13,24],guarente:5,guid:11,habitat:0,haggi:0,handl:[3,13,26,32,38],hard:[3,17,23],has:[17,19,23,29,30],hash:[3,13,19,30],hash_return:[19,30],have:[0,3,4,17,19,23,26,27,29,30,32,35,37],hdd:3,hdf5:3,hdf:3,head:13,header:[22,29],help:[0,13,19,20,30,32],helper:[19,30],here:0,hierarch:0,high:[13,24,41],higher:0,highland:0,highli:41,hinder:41,hold:[17,23],home:37,host:22,hotfix:13,hour:[17,23],how:[0,2,4,13,17,19,22,23,26,27,30,35],howev:[3,41],html:[0,1,2,12],http:[2,12,22,35],ideal:3,idempot:3,identifi:13,ignor:[4,19,30],illustr:0,imag:[1,2,19,30,39],implement:[0,1,4,5,13,17,19,23,24,27,28,29,30,35,38,41],implicit_pipeline_evalu:[19,30],implicitli:4,improv:13,in_plac:25,includ:[0,1,2,3,4,5,12,13,17,19,23,24,30,35,38,39],incompat:26,incomplet:[13,17,23,35],inconsist:35,incorpor:[0,41],incorrect:13,increas:[13,24],ind:[24,25],index:[2,4,5,17,23,24,27,29,35],indic:[17,19,23,24,25,27,29,30,35],individu:4,info_text:32,inform:[3,17,23,41],inherit:[27,29,35],init:[19,30],init_typ:[19,30],initi:[19,20,30],initialize_arrai:[19,30],initialize_coord_arrai:[5,19,27,29,30,35],initialize_output_arrai:[19,30],inlin:0,inplac:24,input:[2,3,4,5,13,17,19,23,24,26,27,29,30,35,39],instal:[1,11,29],instanc:[19,29,30,35],instanti:[29,38],instead:[5,12,24,25,29],institut:41,instruct:[1,12,37],integ:26,integr:[13,41],intent:12,interact:[3,37],interest:37,interfac:[0,4,13,17,19,23,30,36,38,41],intermedi:3,intern:10,interpol:[3,5,11,13,17,19,23,27,29,30,39],interpolate_irregular_grid:27,interpolate_point_data:27,interpolation_param:[5,27],interpolationexcept:28,interpolationpipelin:28,interpret:[2,5,26,27,29],intersect:[4,24,25,27],interv:3,invalid_dim:28,investig:41,invoc:13,involv:3,irregularli:4,is_datetim:24,is_descend:[4,24],is_enumer:[20,30],is_monoton:[4,24],is_source_coordinates_complet:[17,23],is_stack:25,issu:[0,12,13,37],iter:4,iterchunk:25,iteroutput:[17,23],its:[4,5,17,19,23,25,27,30,39],join:4,jointli:[19,30],json:[3,19,30,37,39],jupyt:[1,10],just:[3,4,5,17,23],kappa:39,keep:[0,3,22],kei:[3,4,16,29,33,35],key_spec:3,keyerror:4,keyword:[19,29,30],kind:[3,5],klepto:3,know:[3,35,38],known:13,krige:[0,28],kwarg:[3,5,17,18,19,20,23,24,25,27,28,29,30,32,34,35],label:4,lambda:[3,13],lanczo:5,larger:29,last:[19,26,30,39],lat:[4,5,9,10,25,29,35],lat_lon:[4,25],late:2,later:39,latest:12,latex:2,latitud:[19,30,35],latkei:35,latlon_bounds_str:[19,30],latlon_delta:35,latlon_url_r:35,layer:[29,35],layer_nam:29,layer_styl:[19,30],layerkei:35,lean:0,learn:41,least:3,left:[4,29],len:4,let:12,level:[0,17,23,35,39],lfu:3,librari:[0,1,3,10,22,38,39,41],light:[19,30],like:[0,3,4,28,32],likewis:32,limit:[1,3,15,17,23],line:[0,4,26],linspac:4,linux:[12,37],list:[0,4,5,17,19,23,24,25,27,28,29,30,34,35,39],literatur:0,littl:29,live:2,load:[3,5,16,19,29,30],load_cached_obj:[19,30],load_set:33,local:[3,5,17,19,23,27,30,41],locat:[3,5,17,19,23,27,30],log:37,logic:0,login:[29,35],lon:[4,5,9,10,29,35],long_var_nam:0,longitud:[19,30,35],lonkei:35,look:0,lookup:3,low:[17,23,24],lru:3,mac:[2,12],machin:[12,41],mactex:2,mai:[0,1,3,4,5,12,17,19,23,24,27,29,30,35,37,38,39],maintain:0,major:[13,41],make:[0,2,3,4,15,17,23,25,26,35],make_coord_delta:26,make_coord_valu:26,make_timedelta_str:26,manag:3,mani:[0,17,23,35,41],manner:28,mantain:22,manual:2,map:[3,4,25,35],mark:0,markdown:2,marker:0,mask:32,master:12,match:[3,27,29,35],math:0,matur:0,max:[4,5,13,24,32,39],maxim:41,maximum:[19,30],mayb:3,mcnoleg:0,mean:[0,32,35],mechan:[13,19,29,30],med:5,medium:3,member:[14,15],memcach:3,memori:[3,17,19,23,27,30,39],metadata:[26,29],meth:[27,29,35],method:[0,5,15,16,17,18,19,20,23,27,29,30,35,37,39],metpi:41,midpoint:4,migrat:41,miktex:2,min:[2,4,5,24,32,39],mind:3,minim:[2,41],minimum:[19,30],minor:13,minut:[17,23],mismatch:4,miss:0,mock:5,mockdatasourc:5,mode:[4,5,12,39],model:[0,29,41],modif:0,modifi:[0,4,13,22],modul:[0,5,14,26,32,39],moistur:35,moment:12,mongodb:3,monitor:0,monoton:[13,24],monotoniccoord:24,month:[17,23,26],more:[0,2,3,4,5,17,18,23,24,27,29,35,37],moreov:41,most:[0,26,27,28,29,35],motiv:35,move:13,mpi:3,mru:3,much:[17,23],multi:[17,23,41],multidimension:25,multiindex:4,multipl:[0,3,4,17,23,29,35],multiprocessor:3,multiscal:41,multitud:41,must:[0,4,5,17,23,24,26,27,29,35,39],mwrtm_bh:35,mwrtm_bv:35,mwrtm_clai:35,mwrtm_lewt:35,mwrtm_omega:35,mwrtm_poro:35,mwrtm_rghhmax:35,mwrtm_rghhmin:35,mwrtm_rghnrh:35,mwrtm_rghnrv:35,mwrtm_rghpolmix:35,mwrtm_rghwmax:35,mwrtm_rghwmin:35,mwrtm_sand:35,mwrtm_soilcl:35,mwrtm_vegcl:35,mwrtm_wangwp:35,mwrtm_wangwt:35,my_attr1:38,my_attr2:38,my_new_featur:0,my_pipeline_output:39,my_plugin:39,mycompositor:39,mycustomnod:39,mydatasourc:[38,39],mymodul:39,mynod:39,mynode1:39,mynode2:39,myothernod:39,myotherpipelin:39,myplugin:39,myresult:39,mythirdnod:39,n5eil01u:35,n_thread:[17,23],nad87:4,name:[0,4,5,17,19,20,23,27,29,30,32,35,39],namespac:0,nan:[5,18,19,23,27,29,30,35],nan_val:5,nanval:5,nasa:[3,5,10,11,17,22,23,41],nativ:[4,5,9,17,19,23,29,30,35],native_coordin:[5,17,19,23,27,29,30,35],ndarrai:[0,17,19,23,24,29,30,32,35],ndim:4,nearest:5,nearestneighbor:28,necessari:[5,41],need:[0,2,3,4,5,17,19,23,27,28,29,30,35,37,38],nest:0,network:[0,3,29],neural:0,new_crd:25,new_dim:32,newfunc:0,next:[24,25],nice:24,no_data_v:[27,34,35],no_styl:[19,30],nodata:5,node:[0,1,5,10,11,13,17,18,23,27,29,35,36,37],node_cach:[19,30],node_class:29,node_default:[19,30],node_kwarg:29,nodeexcept:[19,30],nomin:26,non:[0,5,17,23,24,27,29,35,41],none:[4,5,13,16,17,18,19,20,22,23,24,25,27,28,29,30,32,33,35,39],none_v:5,nonev:5,nonlinear:26,north:3,note:[0,4,10,17,19,23,24,26,27,29,30,35,37,39],notebook:[1,10,36,38],notimplementederror:[5,17,19,23,24,27,28,29,30,35],now:[0,32,36,38],np2smap_dat:35,npy:39,npyoutput:39,nsidc:[35,37],nsidc_datapool_op:37,num:24,number:[0,3,19,24,25,26,29,30,39],numer:[4,24],numpi:[0,3,5,17,19,23,26,27,29,30,35,39],numpyarrai:29,obj:[3,19,30,32],object:[0,3,4,13,19,24,25,27,29,30,35,39],observ:[11,41],obtain:27,occur:41,ogc:29,omega:0,omit:39,onc:[17,18,23,37],one:[0,2,3,4,5,17,23,25],ones:[19,30],onli:[0,3,4,12,17,19,23,27,30,35],only_seldom_used_keyword:0,onto:[12,28],open:[29,41],opendap:[29,35,37],opendap_url:37,opendatacub:41,oper:[3,5],oppos:[4,17,23],optim:[17,23,28],optimalinterpol:28,option:[0,2,4,5,14,15,16,17,18,19,22,23,24,25,27,28,29,30,32,33,35,38,39],order:[5,18,23,24,25,27,29,35,41],orderedcompositor:[23,39],ordereddct:[19,30],ordereddict:[4,17,19,23,25,27,29,30],org:35,organ:0,orient:0,origin:[3,12],other:[0,2,3,4,5,11,12,13,24,25,39],other_coord:25,otherfunc:0,otherwis:[4,5,17,19,23,24,30],our:[0,37,41],out:[0,3],out_dir:[19,30],outdir:[19,30,39],outlin:2,output:[0,5,13,17,18,19,23,27,30,35,38,39],outputdata:39,over:[2,3,4,9,17,23,29],overlap:35,overload:29,overrid:[4,15,22],overwrit:[4,17,18,19,28,30],own:[5,17,19,23,27,30,38],packag:[0,2,4,12],pad:[25,28],page:[1,2,37],pai:[27,29,35],panda:4,pangeo:41,paragraph:0,parallel:[13,17,19,23,27,30,41],param:[5,13,39],paramet:[0,3,16,17,18,19,22,23,24,25,26,27,28,29,30,32,33,34,35,39],paramt:3,pars:[4,24],part:[4,17,19,23,30,37,38],part_transpos:32,parti:0,partial:35,particular:[1,3,9,13,32,35,38],pass:[0,4,17,19,23,29,30],password:[16,22,29,35,37],path:[0,12,19,29,30,33,39],patho:3,pattern:3,pdflatex:2,peek:36,pep8:0,perform:3,perman:[19,30],petabyt:41,physic:4,pick:[5,15],pickl:[3,19,30,39],pint:[19,30],pip:[2,12],pipe:3,pipelin:[0,3,5,10,11,13,17,19,23,27,29,30,38,41],pipeline_definit:[19,30],pipeline_json:[19,30],place:[4,13,24,25],plain:[22,29,37],plan:[19,30],platform:12,plot:[19,30],plugin:[0,17,23,27,39],png:[19,30,39],podac:0,podpac:[0,1,2,3,4,5,10,13,39,40],podpact:25,point:[0,4,13,17,23,24,25,35],pointer:29,poros:35,portion:[3,24],possibl:[0,3,10,32],potentailli:5,potenti:[5,13],potential:25,power:41,pre:[17,23],predict:3,prefix:[19,30],prepared_request:22,prepend:[35,39],present:[0,19,29,30,35],preserv:4,press:2,preview:5,previou:3,primari:[0,19,30],primarili:35,print:0,priorit:[3,13],prioriti:[3,13],privat:5,procedur:12,process:[0,3,5,11,13,36,38,41],product:[10,11,17,23,34,35,39,41],profil:37,program:41,project:[0,11],promot:13,prompt:37,properli:0,properti:[3,5,19,24,25,30,35],protocol:[3,41],provid:[0,3,5,27,29,35,37,39],pull:0,purpos:3,put:3,pydap:[29,37],pydap_nod:37,pylint:0,pylintrc:0,pytest:0,python:[0,1,2,3,4,12,22,37,41],quantiz:24,queri:3,quick:[5,11],quickli:5,radial:28,rais:[0,4,5,17,19,23,24,25,26,27,28,29,30,35],ram:[3,19,29,30],rand:5,random:5,rare:0,rasterio:[12,28,29,41],rasterio_interpol:27,rasterio_regular:24,rasteriosourc:29,raw:3,read:[2,4],read_onli:32,readi:37,readthedoc:12,rebuild:2,rebuild_auth:22,rebuilt:2,recenc:3,recent:26,recommend:[4,12],recommonmark:2,record:[0,13],redi:3,redirect:[22,29],redon:3,reduct:3,refactor:13,refer:[0,4,11,19,24,25,29,30],referenc:[0,13,39],region:[9,35],regist:37,registr:37,registri:[19,30],regular:35,regularli:[4,35],reject:0,rel:[17,23,39],relat:[11,35],relationship:0,releas:13,relev:0,reload:2,remain:13,remot:0,remov:[4,5,25,41],renam:5,reorder:25,repeat:[27,29,35],replac:[4,17,23,25,33,35,39],replace_coord:25,report:0,repositori:[0,41],repres:[3,4],reproduc:3,reproject:13,reprojected_coordin:29,reprojectedsourc:29,request:[0,3,4,5,13,17,18,19,22,23,27,29,30,35],requested_coordin:5,requested_source_coordin:5,requested_source_coordinates_index:5,requir:[10,17,23,27,29,37,39,41],reserv:3,resid:29,resolut:[3,4,29,35,41],resourc:[3,35,41],respect:[3,24],respond:3,respons:22,result:[3,4,17,18,23,24,26,27,39],rethink:13,retreiv:[19,30],retriev:[3,10,19,27,29,30,35,36,37,41],return_slic:25,return_typ:29,reusabl:41,revers:25,review:0,rewritten:4,rigth:4,roadmap:[0,11],robust:3,root:[0,2,3,19,30],root_path:21,rootdatakei:35,rotat:4,routin:41,rpc:3,rst:2,rtd:2,rule:[17,23],run:[0,2,3,19,30,37],runtimeerror:35,s3_bucket:29,s3_bucket_nam:[21,29],s3_data:29,s3sourc:29,safe:4,same:[3,17,23,24,35],save:[3,39],save_set:33,scalabl:41,scienc:[11,41],scientif:[1,41],scientist:[11,41],scipy_regular:24,scipygrid:28,scipypoint:28,screen:37,script:[2,37],scroll:37,seamless:11,seamlessli:41,second:[0,17,23],section:[0,2,13],secur:[29,37],see:[0,2,5,10,19,20,24,27,29,30,35,36,38,39],seem:[17,23],segment:[4,24,25],segment_posit:[4,24,25],select:[4,24],self:[0,4,5,16,18,19,20,23,29,30,33,35,39],sens:0,sentenc:0,sentinel:35,seper:0,serial:[3,17,19,23,27,29,30],serv:[2,3,5,19,30],server:[2,3,5,17,23,29,35],serverless:3,servic:[19,29,30,41],servis:3,session:[22,29,35,37],sessionwithheaderredirect:[22,29],set:[0,3,4,5,16,17,19,23,26,27,29,30,32,35,38,39,41],setup:0,sever:[0,39],shape:[4,13,19,25,30],shard:3,share:[11,17,19,23,30,35,41],shared_coordin:[17,23],shell:3,shortcut:[4,5],should:[0,3,4,5,11,13,19,27,28,29,30,35,37,38,39],shouldn:0,sign:24,signatur:20,silent:13,simpl:[3,5,38],simpler:12,simpli:2,simplifi:41,simultan:[17,23],singl:[0,3,4,17,23,24,25,27,29,32,35],singleton:26,site:34,site_url_r:34,size:[3,4,13,19,24,30],skip:25,slice:[4,24,25,27,29,35],slightli:15,slower:[17,23],small:[0,17,23],smap2np_dat:35,smap:[1,3,9,10,39],smap_base_url:35,smap_incomplete_source_coordin:35,smap_l4_sm_lmc_00000000t000000_vv3030_001:35,smap_product_dict:35,smap_product_map:[10,35],smap_product_opt:10,smapbestavail:35,smapdatefold:35,smapporos:35,smapproperti:35,smapsourc:35,smapwilt:35,softwar:[0,41],soil:35,sole:35,some:[0,3,4,5,12,19,29,30,35,38],someth:3,somewhat:12,sort:[4,24],sourc:[0,1,2,5,10,11,12,16,17,18,19,20,22,23,24,25,26,27,28,29,30,32,33,34,35,36,37,38,39,41],source_coord:28,source_coordin:[5,17,23,35],source_coords_subset:28,source_interpol:29,sourcea:39,sourceb:39,sourcec:39,space:[4,24,35],spatial:35,spec:[3,5,6,7,8,36],special:[28,35],specif:[0,1,13,15,19,24,30,35,41],specifi:[0,3,4,13,15,19,24,25,29,30,35],sphinx:[1,2,14],sphinx_rtd_them:2,spl4smau:39,spl4smlm:35,spline:5,split:4,sql:3,sre_pattern:35,ssd:3,ssh:3,stabl:12,stack:[25,27,29,35],stack_dict:25,stack_dim:25,stacked_coord:25,stacked_linspac:4,stage:37,standard:[19,30,41],start:[4,11,24],startpoint:13,state:3,statu:0,stdin:26,step:4,stop:[2,4,17,23,24],storag:[3,41],store:[3,5,17,19,23,27,29,30,35,37,41],stori:9,str:[3,4,16,17,19,22,23,24,25,26,27,29,30,32,35],strict:0,stride:[27,29,35],string:[4,19,22,26,29,30,35,39],structur:[0,1],style:[2,3,19,30],sub:[4,13],subclass:[5,19,24,30,38,39],subject:3,sublim:0,submodul:[0,39],subselect:[17,23],subset:[3,5,11,17,23,27,28,29,35],subtract:4,sum:[26,32],summari:[0,16,17,20,21,22,23,24,25,27,28,29,30,32,33,34,35],suppli:[5,17,19,23,27,29,30,39],support:[2,3,4,13,17,19,23,27,30,41],supported_dim:28,suppos:28,sure:[3,4],symbol:0,syntax:0,system:[0,3,4,24,25,27,29,35,37,41],t18:4,tabl:3,tabular:5,tag:[13,17,23,27],take:[3,5,17,23],target:13,task:41,tbd:[12,38,40],techniqu:0,technolog:3,templat:[2,27,29,35],tempor:35,terabyt:41,test:[5,13],test_funct:0,test_method:0,testclass:0,tex:2,text:[0,22,29,37],than:[0,3,12,17,23,24],thei:[3,5,13,18,23,26,39],theme:2,thi:[0,1,3,4,5,12,13,15,17,18,19,23,24,25,26,27,28,29,30,35,37,38],think:[3,36],thirdfunc:0,those:0,thread:[17,23],three:39,through:[13,37,41],thu:41,tick:0,tier:3,tight:0,tighter:13,tile:35,time:[2,3,4,10,17,23,24,26,29,35,37],timedelta64:[4,24,26],timedelta:[4,26],timestamp:3,to_base_unit:32,toc:2,toctre:14,todo:[3,4,5,6,7,8,9,24,25],togeth:[4,17,18,23],tol:24,toler:[27,28],tolist:10,tool:41,top:[0,39],toplevel:4,total:3,traceback:26,track:0,trait:5,traitlet:[13,32,38,39],transfer:32,transform:29,transit:41,translat:5,translate_requested_coordin:5,transport:[19,30],transpos:[13,25],treat:35,tri:29,tricki:[17,23,29],troubleshoot:29,tsmtr:39,tunnel:3,tupl:[4,19,22,25,30],two:[3,4,28],type:[0,4,5,17,19,20,21,22,23,24,25,26,27,28,30,32,33,34,35,37,39],type_without_descript:0,typeerror:[24,25,26],typic:41,ultim:0,undefin:32,under:[3,13,37],underli:41,underneath:0,underscor:4,understand:[19,30],underutil:41,unfortun:41,unicod:[4,24,25],unifi:41,uniform:4,uniformcoord:24,uniformcoordin:13,uniformli:[4,24],uniqu:[17,23,24,35,38],unit:[0,4,13,17,18,19,20,23,24,26,27,30],unitdataarrai:[17,18,23],unitsdataarrai:[0,3,5,13,17,18,19,23,27,29,30,32,35],unitsnod:32,unless:[27,39],unstabl:36,unstack:[4,25],unstack_dict:25,unsupport:[19,30],until:[0,18,23],unus:[24,25],updat:[3,13,17,23,24,35],update_login:[22,37],ureg:[0,19,30,32],url:[29,35],usag:13,use:[0,2,3,4,5,10,13,15,19,24,29,30,35,37,39,41],usecas:[3,6,7,8,17,23],used:[0,1,3,4,13,16,17,19,23,27,29,30,33,35,36,39],useful:41,user:[0,2,9,11,17,19,23,27,29,30,35,37,38],usernam:[16,22,29,35,37],uses:[0,3,19,30,41],using:[0,2,3,4,5,10,12,14,16,17,19,23,27,29,30,32,35,37,39,40],usingnasa:35,usual:[27,29,37],util:0,utm:4,val:26,valid:[28,32],valid_dim:28,valid_interpol:28,valu:[0,3,4,5,17,18,19,23,24,26,27,29,30,32,33,35,38,39],valueerror:[19,25,27,30],var1:0,var2:0,variabl:[0,29],variant:[19,30],variat:35,varieti:39,variou:1,vast:41,version:[3,29],via:[0,3,5,27,29,35,41],view:11,visit:2,visual:0,vmax:[19,30,39],vmin:[19,30,39],vol:0,wai:[0,4],want:[3,4,5,9,17,23,28,32],warn:[19,29,30],wcs_coordin:29,wcs_default_cr:29,wcs_default_vers:29,wealth:37,weather:3,web:41,webpag:2,websit:[3,35],weight:[19,30],welcom:0,well:[17,23,27],were:[17,19,23,27,30],wgs84:[4,25,29],what:[3,36,38],when:[0,3,4,5,13,17,19,22,23,26,27,29,30,35,38],where:[0,1,4,13,19,24,25,26,29,30,32,37,41],which:[0,5,17,19,23,24,26,27,29,30,35,36],whole:[0,24,25],whose:35,why:11,wider:0,widespread:41,wiki:22,wikipedia:3,wildli:[17,23],wilt:35,window:[2,4,12,37,41],wish:4,within:[4,24,25,41],without:[0,4],work:[0,3,4,10,12],workflow:10,workstat:41,wors:3,would:[3,4,5],wrangl:[11,29],wrap:[0,3],write:[0,19,30,38,39],written:0,xarrai:[3,4,17,18,19,23,25,27,30,32,41],xcoord:25,year:[9,17,23,26],yes:0,yet:24,yield:[17,23,25],you:[0,2,5,12,17,23,24,29,37,38,39],your:[0,12,37,38],zero:[19,24,30],zone:4},titles:["Contributing","Design","Documentation","Requirements","Requirements","Requirements","Requirements","Requirements","Requirements","&lt;no title&gt;","Examples","PODPAC","Install","Roadmap","API Reference","API Quick Reference","podpac.core.authentication.EarthDataSession","podpac.core.compositor.Compositor","podpac.core.compositor.OrderedCompositor","podpac.core.node.Node","podpac.core.node.Style","podpac.settings","podpac.core.authentication","podpac.core.compositor","podpac.core.coordinate.coord","podpac.core.coordinate.coordinate","podpac.core.coordinate.util","podpac.core.data.data","podpac.core.data.interpolate","podpac.core.data.type","podpac.core.node","podpac.core.pipeline","podpac.core.units","podpac.core.utils","podpac.datalib.airmoss","podpac.datalib.smap","Coordinates","NASA Earth Data","Nodes","Pipelines","References","Why PODPAC?"],titleterms:{"case":[3,4,5,6,7,8],"class":5,"function":4,"import":0,"public":0,One:4,Use:[3,4,5,6,7,8],account:37,addit:39,airmoss:34,algorithm:[38,39],api:[0,14,15],arraycoordinates1d:4,attribut:[21,24,28,29,32,35,38,39],authent:[15,16,22],basecoordinates1d:4,bug:13,build:2,clone:12,code:0,common:39,compositor:[17,18,23,38,39],conda:12,contribut:0,convent:0,convet:0,coord:24,coordin:[4,14,24,25,26,36],coordinates1d:4,core:[14,15,16,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33],coverag:0,creat:37,creation:4,credenti:37,custom:38,data:[14,27,28,29,37],datalib:[34,35],datasourc:[5,38,39],definit:39,design:1,develop:[0,2,3,5,6,7,8,12],dimens:4,docstr:0,document:2,earth:37,earthdata:37,earthdatasess:16,environ:12,exampl:[3,4,5,6,7,8,10,38],extend:38,featur:13,govern:0,helper:4,implement:3,implicit:4,instal:[2,12],integr:0,interfac:[3,5,6,7,8],interpol:28,introduct:38,lint:0,login:37,method:4,miscellan:4,monotoniccoordinates1d:4,motiv:37,multidemension:4,nasa:37,node:[19,20,30,38,39],note:3,oper:4,orderedcompositor:18,organ:2,other:41,paper:40,pdf:2,pipelin:[31,39],podpac:[11,12,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,38,41],present:40,problem:41,project:41,properti:4,purpos:11,quick:15,refer:[2,14,15,40],relat:41,repositori:12,requir:[3,4,5,6,7,8],roadmap:13,runtim:37,sampl:39,save:37,scheme:13,set:[15,21,37],shorthand:4,smap:35,sourc:14,specif:[3,4,5,6,7,8],stack:4,stackedcoordin:4,style:[0,20],tag:38,test:[0,2],todo:13,trait:4,type:29,uniformcoordinates1d:4,unit:32,user:[3,5,6,7,8,12],util:[26,33],version:13,websit:2,why:41}})