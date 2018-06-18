Search.setIndex({docnames:["developer/contributing","developer/design","developer/docs","developer/specs/caching","developer/specs/coordinates","developer/specs/interpolation","developer/specs/nodes","developer/specs/pipelines","developer/specs/user_stories","examples","index","install","roadmap","user/api","user/api-min","user/api-min/podpac.core.authentication.EarthDataSession","user/api-min/podpac.core.compositor.Compositor","user/api-min/podpac.core.compositor.OrderedCompositor","user/api-min/podpac.core.node.Node","user/api-min/podpac.core.node.Style","user/api-min/podpac.settings","user/api/podpac.core.authentication","user/api/podpac.core.compositor","user/api/podpac.core.coordinate.coord","user/api/podpac.core.coordinate.coordinate","user/api/podpac.core.coordinate.util","user/api/podpac.core.data.data","user/api/podpac.core.data.type","user/api/podpac.core.node","user/api/podpac.core.pipeline","user/api/podpac.core.units","user/api/podpac.core.utils","user/api/podpac.datalib.smap","user/coordinates","user/nodes","user/pipelines","user/references","why-podpac"],envversion:53,filenames:["developer/contributing.md","developer/design.rst","developer/docs.md","developer/specs/caching.md","developer/specs/coordinates.md","developer/specs/interpolation.md","developer/specs/nodes.md","developer/specs/pipelines.md","developer/specs/user_stories.md","examples.md","index.rst","install.md","roadmap.md","user/api.rst","user/api-min.rst","user/api-min/podpac.core.authentication.EarthDataSession.rst","user/api-min/podpac.core.compositor.Compositor.rst","user/api-min/podpac.core.compositor.OrderedCompositor.rst","user/api-min/podpac.core.node.Node.rst","user/api-min/podpac.core.node.Style.rst","user/api-min/podpac.settings.rst","user/api/podpac.core.authentication.rst","user/api/podpac.core.compositor.rst","user/api/podpac.core.coordinate.coord.rst","user/api/podpac.core.coordinate.coordinate.rst","user/api/podpac.core.coordinate.util.rst","user/api/podpac.core.data.data.rst","user/api/podpac.core.data.type.rst","user/api/podpac.core.node.rst","user/api/podpac.core.pipeline.rst","user/api/podpac.core.units.rst","user/api/podpac.core.utils.rst","user/api/podpac.datalib.smap.rst","user/coordinates.md","user/nodes.md","user/pipelines.md","user/references.md","why-podpac.md"],objects:{"podpac.core":{authentication:[21,0,0,"-"],compositor:[22,0,0,"-"],node:[28,0,0,"-"],pipeline:[29,0,0,"-"],units:[30,0,0,"-"],utils:[31,0,0,"-"]},"podpac.core.authentication":{EarthDataSession:[21,1,1,""],SessionWithHeaderRedirection:[21,1,1,""]},"podpac.core.authentication.EarthDataSession":{__init__:[15,2,1,""]},"podpac.core.authentication.SessionWithHeaderRedirection":{rebuild_auth:[21,2,1,""],update_login:[21,2,1,""]},"podpac.core.compositor":{Compositor:[22,1,1,""],OrderedCompositor:[22,1,1,""]},"podpac.core.compositor.Compositor":{__init__:[16,2,1,""],composite:[22,2,1,""],definition:[22,3,1,""],execute:[22,2,1,""],get_native_coordinates:[22,2,1,""],get_shared_coordinates:[22,2,1,""],get_source_coordinates:[22,2,1,""],iteroutputs:[22,2,1,""]},"podpac.core.compositor.OrderedCompositor":{__init__:[17,2,1,""],composite:[22,2,1,""]},"podpac.core.coordinate":{coord:[23,0,0,"-"],coordinate:[24,0,0,"-"],util:[25,0,0,"-"]},"podpac.core.coordinate.coord":{BaseCoord:[23,1,1,""],Coord:[23,1,1,""],MonotonicCoord:[23,1,1,""],UniformCoord:[23,1,1,""],coord_linspace:[23,4,1,""]},"podpac.core.coordinate.coord.BaseCoord":{add:[23,2,1,""],area_bounds:[23,3,1,""],bounds:[23,3,1,""],concat:[23,2,1,""],coordinates:[23,3,1,""],dtype:[23,3,1,""],intersect:[23,2,1,""],is_datetime:[23,3,1,""],is_descending:[23,3,1,""],is_monotonic:[23,3,1,""],kwargs:[23,3,1,""],rasterio_regularity:[23,3,1,""],scipy_regularity:[23,3,1,""],select:[23,2,1,""],size:[23,3,1,""]},"podpac.core.coordinate.coord.Coord":{is_datetime:[23,3,1,""],is_descending:[23,3,1,""],is_monotonic:[23,3,1,""],rasterio_regularity:[23,3,1,""],scipy_regularity:[23,3,1,""],size:[23,3,1,""]},"podpac.core.coordinate.coord.MonotonicCoord":{bounds:[23,3,1,""],is_descending:[23,3,1,""],is_monotonic:[23,3,1,""]},"podpac.core.coordinate.coord.UniformCoord":{bounds:[23,3,1,""],coords:[23,3,1,""],is_datetime:[23,3,1,""],is_descending:[23,3,1,""],is_monotonic:[23,3,1,""],rasterio_regularity:[23,3,1,""],scipy_regularity:[23,3,1,""],size:[23,3,1,""]},"podpac.core.coordinate.coordinate":{BaseCoordinate:[24,1,1,""],Coordinate:[24,1,1,""],CoordinateGroup:[24,1,1,""],convert_xarray_to_podpac:[24,4,1,""]},"podpac.core.coordinate.coordinate.Coordinate":{add_unique:[24,2,1,""],coords:[24,3,1,""],delta:[24,3,1,""],dims:[24,3,1,""],drop_dims:[24,2,1,""],gdal_crs:[24,3,1,""],get_dims_map:[24,2,1,""],get_shape:[24,2,1,""],intersect:[24,2,1,""],is_stacked:[24,3,1,""],iterchunks:[24,2,1,""],kwargs:[24,3,1,""],replace_coords:[24,2,1,""],shape:[24,3,1,""],stack:[24,2,1,""],stack_dict:[24,2,1,""],transpose:[24,2,1,""],unstack:[24,2,1,""],unstack_dict:[24,2,1,""]},"podpac.core.coordinate.coordinate.CoordinateGroup":{dims:[24,3,1,""],stack:[24,2,1,""],unstack:[24,2,1,""]},"podpac.core.coordinate.util":{add_coord:[25,4,1,""],get_timedelta:[25,4,1,""],get_timedelta_unit:[25,4,1,""],make_coord_delta:[25,4,1,""],make_coord_value:[25,4,1,""],make_timedelta_string:[25,4,1,""]},"podpac.core.data":{data:[26,0,0,"-"],type:[27,0,0,"-"]},"podpac.core.data.data":{DataSource:[26,1,1,""]},"podpac.core.data.data.DataSource":{definition:[26,3,1,""],execute:[26,2,1,""],get_data:[26,2,1,""],get_data_subset:[26,2,1,""],get_native_coordinates:[26,2,1,""],interpolate_irregular_grid:[26,2,1,""],interpolate_point_data:[26,2,1,""],rasterio_interpolation:[26,2,1,""]},"podpac.core.data.type":{NumpyArray:[27,1,1,""],PyDAP:[27,1,1,""],RasterioSource:[27,1,1,""],ReprojectedSource:[27,1,1,""],S3Source:[27,1,1,""],WCS:[27,1,1,""]},"podpac.core.data.type.NumpyArray":{get_data:[27,2,1,""]},"podpac.core.data.type.PyDAP":{get_data:[27,2,1,""],get_native_coordinates:[27,2,1,""],keys:[27,3,1,""]},"podpac.core.data.type.RasterioSource":{band_count:[27,3,1,""],band_descriptions:[27,3,1,""],band_keys:[27,3,1,""],close_dataset:[27,2,1,""],get_band_numbers:[27,2,1,""],get_data:[27,2,1,""],get_native_coordinates:[27,2,1,""]},"podpac.core.data.type.ReprojectedSource":{base_ref:[27,3,1,""],definition:[27,3,1,""],get_data:[27,2,1,""],get_native_coordinates:[27,2,1,""]},"podpac.core.data.type.S3Source":{get_data:[27,2,1,""],native_coordinates:[27,3,1,""]},"podpac.core.data.type.WCS":{base_ref:[27,3,1,""],get_capabilities_url:[27,3,1,""],get_data:[27,2,1,""],native_coordinates:[27,3,1,""]},"podpac.core.node":{Node:[28,1,1,""],NodeException:[28,5,1,""],Style:[28,1,1,""]},"podpac.core.node.Node":{__init__:[18,2,1,""],base_definition:[28,2,1,""],base_ref:[28,3,1,""],cache_dir:[28,3,1,""],cache_obj:[28,2,1,""],cache_path:[28,2,1,""],clear_disk_cache:[28,2,1,""],copy_output_array:[28,2,1,""],definition:[28,3,1,""],evaluated_hash:[28,3,1,""],execute:[28,2,1,""],get_hash:[28,2,1,""],get_image:[28,2,1,""],get_output_coords:[28,2,1,""],get_output_dims:[28,2,1,""],get_output_path:[28,2,1,""],get_output_shape:[28,2,1,""],get_params:[28,2,1,""],init:[28,2,1,""],initialize_array:[28,2,1,""],initialize_coord_array:[28,2,1,""],initialize_output_array:[28,2,1,""],latlon_bounds_str:[28,3,1,""],load:[28,2,1,""],load_cached_obj:[28,2,1,""],pipeline:[28,3,1,""],pipeline_definition:[28,3,1,""],pipeline_json:[28,3,1,""],shape:[28,3,1,""],write:[28,2,1,""]},"podpac.core.node.Style":{__init__:[19,2,1,""]},"podpac.core.pipeline":{AWSOutput:[29,1,1,""],FTPOutput:[29,1,1,""],FileOutput:[29,1,1,""],ImageOutput:[29,1,1,""],NoOutput:[29,1,1,""],Output:[29,1,1,""],Pipeline:[29,1,1,""],PipelineError:[29,5,1,""],PipelineNode:[29,1,1,""],make_pipeline_definition:[29,4,1,""]},"podpac.core.pipeline.FileOutput":{write:[29,2,1,""]},"podpac.core.pipeline.ImageOutput":{write:[29,2,1,""]},"podpac.core.pipeline.NoOutput":{write:[29,2,1,""]},"podpac.core.pipeline.Output":{write:[29,2,1,""]},"podpac.core.pipeline.Pipeline":{check_execution_graph:[29,2,1,""],check_params:[29,2,1,""],execute:[29,2,1,""],parse_node:[29,2,1,""],parse_output:[29,2,1,""]},"podpac.core.pipeline.PipelineNode":{execute:[29,2,1,""]},"podpac.core.units":{Units:[30,1,1,""],UnitsDataArray:[30,1,1,""],UnitsNode:[30,1,1,""]},"podpac.core.units.Units":{validate:[30,2,1,""]},"podpac.core.units.UnitsDataArray":{max:[30,2,1,""],mean:[30,2,1,""],min:[30,2,1,""],part_transpose:[30,2,1,""],set:[30,2,1,""],to:[30,2,1,""],to_base_units:[30,2,1,""]},"podpac.core.units.UnitsNode":{validate:[30,2,1,""]},"podpac.core.utils":{cached_property:[31,4,1,""],clear_cache:[31,4,1,""],common_doc:[31,4,1,""],get_settings_file:[31,4,1,""],load_setting:[31,4,1,""],save_setting:[31,4,1,""]},"podpac.datalib":{smap:[32,0,0,"-"]},"podpac.datalib.smap":{SMAP:[32,1,1,""],SMAPBestAvailable:[32,1,1,""],SMAPDateFolder:[32,1,1,""],SMAPPorosity:[32,1,1,""],SMAPProperties:[32,1,1,""],SMAPSource:[32,1,1,""],SMAPWilt:[32,1,1,""],np2smap_date:[32,4,1,""],smap2np_date:[32,4,1,""]},"podpac.datalib.smap.SMAP":{base_ref:[32,3,1,""],definition:[32,3,1,""],get_available_times_dates:[32,2,1,""],get_partial_native_coordinates_sources:[32,2,1,""],get_shared_coordinates:[32,2,1,""],get_source_coordinates:[32,2,1,""],keys:[32,3,1,""],source:[32,3,1,""]},"podpac.datalib.smap.SMAPDateFolder":{get_available_coords_sources:[32,2,1,""],get_shared_coordinates:[32,2,1,""],get_source_coordinates:[32,2,1,""],keys:[32,3,1,""],source:[32,3,1,""]},"podpac.datalib.smap.SMAPProperties":{get_native_coordinates:[32,2,1,""]},"podpac.datalib.smap.SMAPSource":{get_available_times:[32,2,1,""],get_data:[32,2,1,""],get_native_coordinates:[32,2,1,""],latkey:[32,3,1,""],lonkey:[32,3,1,""],product:[32,3,1,""]},podpac:{settings:[20,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception"},terms:{"3rd":0,"5th":4,"boolean":[4,16,22,24,26,27,35],"break":12,"case":[0,12,16,22,26,30],"class":[0,1,4,14,15,16,17,18,19,21,22,23,24,26,27,28,29,30,32,34,35],"default":[0,4,12,16,18,22,23,24,26,27,28,29,34,35],"enum":4,"final":[8,18,28],"float":[4,18,23,24,25,28],"function":[0,1,12,14,18,23,24,25,28,29,31,32],"import":[0,9,35],"int":[0,4,16,22,24,27],"long":[0,16,22],"new":[0,4,11,16,22,23,24,25,26,34],"return":[0,4,16,17,18,21,22,23,24,25,26,27,28,29,30,31,32],"static":2,"true":[16,18,22,23,24,26,28,34,35],"try":[0,11],"var":0,"while":0,AWS:[1,10,12],Adding:0,And:[0,2],CRS:4,For:[0,4,11,12,16,18,22,23,24,28,30,34,35],GIS:0,IDE:0,Not:[9,18,23,28,35],One:[16,22],The:[0,1,2,4,9,10,11,12,16,18,22,23,24,25,26,27,28,34,35],Then:2,There:0,These:[0,11],Use:10,Uses:[18,27,28],WCS:[9,27],With:21,__doc__:31,__init__:[15,16,17,18,19],_alat:4,_ca:4,_cl:4,_cm:4,_cu:4,_sl:4,_static:2,_templat:2,_ualt:4,_ulat:4,_ulon:4,_utim:4,a1d:4,abl:34,about:0,abov:[0,4],accept:0,access:[0,1,10,12,21,27],accur:[15,16,19,22],activ:11,actual:[0,4,16,22,27],adapt:0,add:[0,2,3,4,5,6,7,8,12,23,25],add_coord:25,add_dim:4,add_uniqu:24,added:25,adding:25,addit:[0,4,18,24,28,34],adher:0,affin:27,after:[11,16,18,22,27,28],again:34,against:27,alat:4,alglib:1,algorithm:[0,1,9,10,18,28],alias:4,align:4,all:[0,2,4,9,11,14,16,18,22,23,24,26,27,28,35],all_cach:[18,28],alloc:[16,18,22,26,28],allow:[4,12,16,22],allow_non:[30,34],along:[23,24,26],alreadi:0,also:[0,4,16,18,22,25,27,28,34,35],alt:[4,27],amongst:[16,22],ams2018:36,anaconda:11,analysi:10,ani:[0,16,18,22,24,26,27,28],anonym:0,anoth:[4,27],api:[2,10],appear:[17,22],append:12,arbitrari:4,architectur:10,area:[4,27],area_bound:[4,23],arg:[19,23,24,28,29,30],argument:[18,27,28],arithmet:35,arr:[18,28],arrai:[0,4,16,18,22,23,24,25,26,27,28,30],array_lik:0,artifact:0,ascend:23,assign:[18,28],assum:[0,11],attent:27,attr:[18,28,30,31,34,35],attribut:[12,15,16,17,18,19,21,22,24,26,28,29],auth:21,auth_class:[27,32],auth_host:[15,21],auth_sess:[27,32],authent:27,auto:[0,2],autobuild:2,autodoc:2,autodoc_default_flag:13,autodocstr:0,autogen:[2,13],autogener:[13,14],autom:12,automat:[2,12,13,16,18,22,27,28,35],avail:27,averag:27,avoid:0,awar:[16,17,18,22,26,28],aws:[16,18,22,26,28,35],awsoutput:29,back:0,backward:[12,23],badexcept:0,band:27,band_count:27,band_descript:27,band_kei:27,base64:[18,28],base:[1,4,16,17,18,22,23,24,25,26,27,28],base_definit:[18,28],base_defit:[18,28],base_ref:[18,27,28,32],base_url:32,basecoord:23,basecoordin:24,basic:[23,35],becaus:[0,9,16,22,23,25,27],been:[18,28],befor:35,behav:[4,12],behavior:35,being:[18,27,28],below:13,benefit:0,best:27,between:[23,24],beyond:23,bilinear:35,bilinearli:27,bleed:11,bool:[16,18,20,22,23,26,28,35],both:0,bound:[4,18,23,24,28],box:[4,23],bracket:0,branch:[0,11],browser:2,bucket:[27,29],bug:0,cach:[2,12,16,18,22,28],cache_dir:[18,28],cache_native_coordin:[16,22,32],cache_obj:[18,28],cache_path:[18,28],cache_to_s3:20,cache_typ:[18,28],cached_properti:31,calcul:[4,16,22,23],call:25,can:[0,4,9,10,16,18,22,25,26,27,28,34,35],cannot:[18,25,27,28,34],capabl:27,captur:1,cast:[4,23,25],certain:4,certiain:4,cfg:0,chang:[0,2,16,22,31],channel:11,charact:25,check:[0,4],check_dim_repeat:24,check_execution_graph:29,check_param:29,checkout:[0,11],cherri:14,child:[26,27],children:[16,18,22,26,28],choic:0,choos:4,chunk:24,cite:0,clear:[18,28],clear_cach:31,clear_disk_cach:[18,28],clim:[19,28],close:27,close_dataset:27,cloud:[1,10,18,28],cmap:[19,28],code:[2,11,18,28],coeffici:[18,28],collabor:10,colormap:[18,28,35],com:11,combin:[4,10,17,22],command:0,comment:0,common:[4,16,18,22,25,28],common_doc:31,common_parameters_listed_abov:0,commond:31,commun:[0,12],compat:[0,12,23,27],complet:[16,22],complex:0,complient:27,composit:[10,16,17,22,35],compositor:[18,28],comput:[0,10,11],concat:[4,23],concaten:[4,23,24],concern:27,conda:2,conf:2,config:[13,30],configur:[0,2],consid:4,construct:[16,22,27],contain:[1,4,16,17,18,22,26,27,28,35],contribut:[10,12],control:[0,18,28],convert:[0,2,23,24,25],convert_xarray_to_podpac:24,convienc:2,convolut:12,coodin:4,coodinates_slic:[26,27],coord:[4,9,18,24,28,30,34],coord_linspac:23,coord_ref_si:[4,23,24],coordin:[8,9,10,12,16,18,22,26,27,28,29,32],coordinate1d:4,coordinategroup:24,coordinates_slic:[27,32],coordinates_sourc:27,coordint:4,coords_copi:4,coords_dst:26,coords_src:26,coords_subset:26,copi:[2,4,18,24,28],copy_output_arrai:[18,28],core:[0,1,11,34],correct:[0,16,18,22,24,25,26,28],correspond:24,could:[0,14,16,22],cov:0,coverag:12,coveral:0,crear:11,creat:[0,4,9,11,18,27,28],creation:12,creep:0,criteria:27,crs:27,ctype:[4,23,24],current:[16,18,22,26,28,35],custom:[0,12,23,35],dai:[16,22,25],dalta:25,dap:27,dask:12,data:[1,4,8,9,10,12,16,18,21,22,28,30,34],data_dst:26,data_src:26,dataarrai:[4,16,17,18,22,24,26,28,30],dataarraycoordin:24,datakei:27,datalib:[1,9,35],dataset:[16,22,27,35],datasettyp:27,datasourc:[0,12,16,18,22,26,27,28],datasubset:26,datatyp:[11,18,28],date:[8,16,22,25,32],date_file_url_r:32,date_time_file_url_r:32,date_time_url_r:32,date_url_r:32,datetim:[23,25],datetime64:[4,23,25],decid:0,decor:31,decreas:23,def:0,default_valu:[30,34],defin:[4,16,18,22,23,28,34,35],definit:[12,16,18,22,26,27,28,29,32,34],definition_return:[18,28],defint:[16,22,26],delet:[18,28],delta:[4,23,24,25],demo:8,demonstr:1,depend:[4,11,26,27],deploy:1,deprec:[18,24,28],deriv:[16,18,22,26,27,28],descend:23,describ:[0,4,16,22,26,27,35],descrip:[18,28],descript:[0,15,16,17,19,20,21,22,23,24,25,26,27,28,29,30,31,32],design:[10,34],desir:[16,18,22,28],destin:35,detail:[0,4],detect:2,determin:[16,18,22,27,28],deval:11,develop:[0,9,10,12,16,22,26],dict:[4,16,18,22,24,26,27,28,29,31],dictioari:[18,28],dictionari:[4,16,18,22,23,24,26,28,31,35],differ:[4,16,22,25,27],dim:[4,18,24,28,30],dimens:[12,16,18,22,23,24,26,27,28],dimension:25,dims_map:24,direct:[4,13],directli:[26,27],directori:[0,1,2,18,28],disciplin:0,discrib:[18,28],disk:[18,27,28],displai:[18,21,28],dist:1,distance_unit:4,distribut:[2,11],divid:23,divisor:25,dlat:4,dlon:4,doc:[1,2],doc_dict:31,docstr:[2,31],doctest:[0,2,24],doctr:[12,31],document:[0,1,10,12,13,14],doe:[0,4,16,22],doesn:[18,27,28],doing:27,domain:[0,1],done:0,down:[16,22],download:27,downsampl:4,downscaled_sm:35,drop:4,drop_dim:[4,24],dtype:[4,18,23,28],due:4,duplic:24,dure:[2,12],each:[2,4,12,16,22,23,24,34,35],earth:10,earthdata:[21,27],earthdatasess:21,eas:4,easier:[0,14],edg:11,editor:0,effici:[16,22,27],either:[0,4,26,27],element:4,els:23,empti:[4,18,23,28],enabl:12,encod:[18,28,30],encount:11,encourag:0,end:[4,12,23],endpoint:[12,27],enter:2,entir:[16,18,22,28],entri:2,enumeration_color:[19,28],enumeration_legend:[19,28],environ:1,environment:0,epsg:[23,27],eqn:35,equal:27,equat:[18,28],equival:[4,35],error:[18,27,28],especi:[16,22],essenti:1,etc:[0,2,4,16,18,22,26,28,29],evalu:[12,16,18,22,27,28,35],evaluated_coordin:[18,28],evaluated_hash:[18,28],even:[0,4],everi:[4,16,22],everyth:[12,16,18,22,28],exampl:[0,1,10,16,18,22,25,26,28,35],exce:25,except:[4,18,27,28,29],execut:[9,12,16,17,18,22,26,28,29,34,35],execute_param:[18,28],exist:[4,11,18,28],expand:12,expect:[18,28],experi:11,expert:0,expir:12,explan:0,explicit:4,explicitli:[4,35],extend:[0,18,28],extent:[4,23],extract:25,facilit:[4,10],fairli:0,fals:[16,18,22,23,24,28,29,30,34,35],faster:[16,22],fastpath:30,featur:0,feed:27,feet:4,fetch:27,few:[16,22,26],fewer:23,field:31,fifthfunc:0,file:[0,2,18,25,27,28,29],file_handl:27,file_url_r:32,file_url_re2:32,filenam:[18,28],fileoutput:29,filepath:26,fill:[4,16,22],fillval:[18,28],find:27,first:[0,16,22],fit:27,fix:12,flag:[16,18,22,28],flatten:29,float64:4,focu:[10,30],folder:[16,22],folder_d:32,follow:[0,1,2,4,9,12],folow:4,forg:11,fork:0,form:25,format:[0,2,12,18,28,29,31,35],found:9,fourthfunc:0,free:4,from:[0,2,4,11,18,21,24,25,26,27,28,35],ftpoutput:29,full:[13,18,23,28,35],func:31,futur:[18,28],fuzzi:0,gdal:24,gdal_cr:24,gener:[0,1,2,4,9,12,17,22,30],geodet:4,geodic:27,geoscienc:0,geospati:[10,12],geotif:35,geotiff:27,get:[0,4,8,10,16,18,22,23,25,28],get_available_coords_sourc:32,get_available_tim:32,get_available_times_d:32,get_band_numb:27,get_capabilities_url:27,get_data:[26,27,32],get_data_subset:26,get_descript:[18,28],get_dim:4,get_dims_map:24,get_hash:[18,28],get_imag:[18,28],get_native_coordin:[16,22,26,27,32],get_output_coord:[18,28],get_output_dim:[18,28],get_output_path:[18,28],get_output_shap:[18,28],get_param:[18,28],get_partial_native_coordinates_sourc:32,get_settings_fil:31,get_shap:24,get_shared_coordin:[16,22,32],get_source_coordin:[16,22,32],get_timedelta:25,get_timedelta_unit:25,git:[0,11,12],github:[0,10,11],give:[4,17,22,26,27],given:[4,18,23,24,28],going:0,gov:21,greek:0,grid:[4,26],group:[0,12],groupcoordin:[16,22],guarante:[12,23],guid:10,habitat:0,haggi:0,handl:[12,25,30,34],hard:[16,22],has:[16,18,22,27,28],hash:[12,18,28],hash_return:[18,28],have:[0,4,16,18,22,25,26,27,28,30],head:12,header:[21,27],help:[0,12,15,18,19,28,30],helper:[18,28],here:0,high:[12,23],highland:0,hold:[16,22],host:21,hotfix:12,hour:[16,22],how:[0,2,4,12,16,18,21,22,25,26,28],html:[0,1,2],http:[2,11,21],identifi:12,ignor:[4,18,28],illustr:0,imag:[1,2,18,28,29],imageoutput:29,implement:[0,1,4,12,16,18,22,23,26,27,28,35],implicit_pipeline_evalu:[18,28,29],implicitli:[4,35],improv:12,in_plac:24,includ:[0,1,2,4,11,12,16,18,22,23,28,29,34,35],incompat:25,incomplet:[12,16,22],incorpor:0,incorrect:12,increas:[12,23],ind:[23,24],index:[2,4,16,22,23,27],indic:[16,18,22,23,24,26,27,28],individu:4,info_text:30,inform:[16,22],init:[18,28],init_typ:[18,28],initi:[15,18,19,28],initialize_arrai:[18,28],initialize_coord_arrai:[18,28],initialize_output_arrai:[18,28],inlin:0,inplac:23,input:[2,4,12,16,18,22,23,25,26,28,29,35],instal:[1,10,27],instanc:[18,27,28],instanti:[27,34],instead:[11,23,24,27],instruct:[1,11],integ:[25,34],integr:12,intent:11,interfac:[0,4,12,16,18,22,28],intern:9,interpol:[4,10,12,16,18,22,26,27,28,35],interpolate_irregular_grid:26,interpolate_point_data:26,interpolation_param:26,interpret:[2,25,26,27],intersect:[4,23,24,26],invoc:12,irregularli:4,is_datetim:[4,23],is_descend:[4,23],is_enumer:[19,28],is_monoton:[4,23],is_source_coordinates_complet:[16,22],is_stack:24,issu:[0,11,12],item:24,iter:4,iterchunk:24,iteroutput:[16,22],its:[4,16,18,22,24,26,28,35],join:4,jointli:[18,28],json:[18,28,35],jupyt:[1,9],just:[16,22],kappa:35,keep:21,kei:[4,27,31,32],keyerror:4,keyword:[18,27,28],known:12,krige:0,kwarg:[16,17,18,19,22,23,24,26,27,28,29,30,32],l1d:4,label:4,lambda:12,larger:27,last:[18,25,28],lat:[4,8,9,24,27],lat_lon:[4,24],late:2,later:[34,35],latex:2,latitud:[18,28],latkei:32,latlon_bounds_str:[18,28],latlon_delta:32,latlon_url_r:32,layer:27,layer_nam:27,layer_styl:[18,28],layerkei:32,left:27,len:4,let:11,level:[16,22,35],librari:[0,1,9,21],light:[18,28],like:[0,4,30],likewis:30,limit:[1,14,16,22],line:[0,4,25],linspac:4,linux:11,list:[0,4,16,18,22,23,24,26,27,28,29,32,35],literatur:0,littl:27,live:2,load:[18,27,28],load_cached_obj:[18,28],load_set:31,local:[16,18,22,26,28],locat:[16,18,22,26,28,35],logic:0,login:27,lon:[4,8,9,27],long_var_nam:0,longitud:[18,28],lonkei:32,look:0,low:[16,22,23],m1d:4,mac:[2,11],machin:11,mactex:2,mai:[0,1,4,11,16,18,22,23,26,27,28,34],main_nod:29,major:12,make:[0,2,4,14,16,22,24,25,29],make_coord_delta:25,make_coord_valu:25,make_pipeline_definit:29,make_timedelta_str:25,mani:[0,16,22],mantain:21,manual:2,map:[4,24],mark:0,markdown:2,marker:0,mask:30,master:11,match:[26,27],math:0,matur:0,max:[12,23,30,35],maximum:[18,28],mcnoleg:0,mean:[0,30],mechan:[12,18,27,28],member:[13,14],memori:[16,18,22,26,28,35],metadata:[25,27],method:[0,14,15,16,17,18,19,22,26,27,28],miktex:2,min:[2,23,30,35],minim:2,minimum:[18,28],minor:12,minut:[16,22],mismatch:4,miss:0,mode:[11,35],model:[0,27],modif:0,modifi:[0,4,12,16,18,21,22,26,28],modul:[0,13,25,30,35],moment:11,monitor:0,monoton:[12,23],monotoniccoord:23,month:[16,22,25],more:[0,2,4,16,17,22,23,35],most:[0,25],move:[4,12],much:[16,22],multi:[16,22],multidimension:24,multiindex:4,multipl:[0,4,16,22,27],must:[16,22,23,25,35],my_attr:34,my_new_featur:0,my_param1:34,my_param2:34,mycompositor:35,mycustomnod:35,mydatasourc:34,mymodul:35,mynod:35,mynode1:35,mynode2:35,myothernod:35,myplugin:35,mythirdnod:35,n_thread:[16,22],nad87:4,name:[0,4,16,18,19,22,26,27,28,29,30,35],nan:[17,18,22,26,27,28],nasa:[16,21,22],nativ:[4,8,16,18,22,27,28],native_coordin:[16,18,22,26,27,28,29],ndarrai:[0,16,18,22,23,27,28,30],ndim:4,need:[0,2,4,16,18,22,26,27,28,34],nest:0,network:[0,27],neural:0,new_crd:24,new_dim:30,newfunc:0,next:[23,24],nice:23,no_data_v:[26,32],no_styl:[18,28],node:[0,1,9,10,12,16,17,22,26,27,29],node_cach:[18,28],node_class:27,node_default:[18,28],node_kwarg:27,nodeexcept:[18,28],nomin:25,non:[16,22,23,27,35],none:[4,12,15,16,17,18,19,21,22,23,24,26,27,28,29,30,31],nonlinear:25,nooutput:29,note:[0,4,9,16,18,22,23,25,26,27,28],notebook:[1,9],notimplementederror:[16,18,22,23,26,27,28,29],now:[0,30],np2smap_dat:32,num:23,number:[0,18,23,24,25,27,28,35],numer:[4,23],numpi:[0,16,18,22,25,26,27,28],numpyarrai:27,obj:[18,28,30],object:[0,4,12,18,23,24,26,27,28,35],observ:10,obtain:26,ogc:27,omega:0,omit:35,onc:[16,17,22],one:[0,2,4,16,22,24,35],ones:[18,28],onli:[0,4,11,16,18,22,26,28],only_seldom_used_keyword:0,onto:11,open:27,opendap:27,oppos:[4,16,22],optim:[16,22],option:[0,2,4,13,14,16,17,18,21,22,23,24,26,27,28,29,30,31,34,35],order:[17,22,23,24,27],orderedcompositor:[22,35],ordereddct:[18,28],ordereddict:[4,16,18,22,24,26,27,28],orient:0,origin:11,other:[0,2,4,11,12,23,24,35],other_coord:24,otherfunc:0,otherwis:[16,18,22,23,28],our:0,out:0,out_dir:[18,28],outdir:[18,28,29,35],outlin:2,output:[0,12,16,17,18,22,26,28,29,34],output_nod:29,outputdata:35,over:[2,4,8,16,22,27],overload:27,overrid:[4,14,21],overwrit:[4,16,17,18,28],own:[16,18,22,26,28,34],packag:[0,2,11],pad:24,page:[1,2],pai:27,panda:4,paragraph:0,parallel:[12,16,18,22,26,28],param:[12,16,18,22,26,28,29,35],paramet:[0,16,17,18,21,22,23,24,25,26,27,28,29,30,31,32,34,35],pars:[4,23],parse_nod:29,parse_output:29,part:[4,16,18,22,28],part_transpos:30,parti:0,particular:[1,8,12,30,34],pass:[0,4,16,18,22,27,28,34],password:[15,21,27,32],path:[11,18,27,28,29,31,35],pdflatex:2,pep8:0,perman:[18,28],physic:4,pick:14,pickl:[18,28,35],pint:[18,28],pip:[2,11],pipelin:[9,10,12,16,18,22,26,27,28,34],pipeline_definit:[18,28],pipeline_json:[18,28,29],pipelineerror:29,pipelinenod:29,place:[4,12,23,24],plain:27,plan:[18,28],platform:11,plot:[18,28],plugin:[0,16,22,26,35],png:[18,28,35],podpac:[0,1,2,9,12,35,36],podpact:24,point:[0,4,12,16,22,23,24],pointer:27,portion:23,possibl:[4,9,30],potenti:12,potential:24,pre:[16,22],prefix:[18,28],prepared_request:21,prepend:35,present:[0,18,27,28],preserv:4,press:2,primari:[18,28],print:0,priorit:12,prioriti:12,procedur:11,process:[0,10,12,34],produc:35,product:[9,10,32,35],project:[0,10],promot:12,properli:0,properti:[18,23,24,28,32],provid:[0,27,35],pull:0,pydap:27,pylint:0,pylintrc:0,pytest:0,python:[0,1,2,4,11,21],quantiz:23,quick:10,rais:[0,4,16,18,22,23,24,25,26,27,28,29,32],ram:[18,27,28],rasterio:[11,27],rasterio_interpol:26,rasterio_regular:[4,23],rasteriosourc:27,read:[2,4],read_onli:30,rebuild:2,rebuild_auth:21,rebuilt:2,recent:25,recommend:[4,11],recommonmark:2,record:[0,12],redirect:[21,27],refactor:12,refer:[0,4,10,18,23,24,27,28],referenc:[12,35],region:8,registri:[18,28],regularli:4,reject:0,rel:[16,22,35],relationship:0,releas:12,relev:0,reload:2,remain:12,remot:0,remov:[4,24],reorder:24,repeat:27,replac:[4,16,22,24,31,35],replace_coord:24,report:0,repositori:0,repres:4,reproject:12,reprojected_coordin:27,reprojectedsourc:27,request:[0,4,12,16,17,18,21,22,26,27,28],requir:[16,22,26,27,35],resid:27,resolut:[4,27],respect:23,respons:21,result:[4,16,17,22,23,25,26],rethink:12,retreiv:[18,28],retriev:[9,18,26,27,28],return_slic:24,return_typ:27,revers:24,review:0,rewritten:4,roadmap:[0,10],root:[0,2,18,28],root_path:20,rootdatakei:32,rotat:4,rst:2,rtd:2,rule:[16,22],run:[0,2,18,28],runtim:[16,18,22,26,28],runtimeerror:32,s3_bucket:27,s3_bucket_nam:[20,27],s3_data:27,s3sourc:27,safe:4,same:[16,22,23],save_set:31,scheme:4,scienc:10,scientif:1,scientist:10,scipy_regular:[4,23],script:2,seamless:10,second:[16,22],section:[0,2,12],secur:27,see:[0,2,9,15,18,19,23,28,35],seem:[16,22],segment:[4,23,24],segment_posit:[4,23,24],select:[4,23],self:[0,4,15,17,18,19,22,27,28,31],sens:0,sentenc:0,seper:0,serial:[16,18,22,26,27,28],serv:[2,18,28],server:[2,16,22,27],servic:[18,27,28],session:[21,27],sessionwithheaderredirect:[21,27],set:[0,4,16,18,22,24,25,26,27,28,30,34,35],setup:0,sever:[0,35],shape:[4,12,18,24,28,29],share:[10,16,18,22,28],shared_coordin:[16,22],should:[0,4,10,12,18,26,27,28,34,35],shouldn:0,sign:23,signatur:[15,19],silent:12,simpler:11,simpli:2,simultan:[16,22],singl:[0,4,16,22,23,24,26,30],singleton:25,size:[4,12,18,23,28],skip:24,skip_evalu:29,slice:[4,23,24,26,27],slightli:14,slower:[16,22],small:[0,16,22],smap2np_dat:32,smap:[1,8,9,35],smap_base_url:32,smap_incomplete_source_coordin:32,smap_product_map:[9,32],smap_product_opt:9,smapbestavail:32,smapdatefold:32,smapporos:32,smapproperti:32,smapsourc:32,smapwilt:32,softwar:0,some:[0,4,11,18,27,28],somewhat:11,sort:[4,23],sourc:[1,2,9,10,11,15,16,17,18,19,21,22,23,24,25,26,27,28,29,30,31,32,34,35],source_coordin:[16,22],source_interpol:27,source_pipelin:29,sourcea:35,sourceb:35,sourcec:35,space:[4,23],spec:[3,5,6,7],specif:[0,1,12,14,18,23,28],specifi:[0,4,12,14,18,23,24,27,28],sphinx:[1,2,13],sphinx_rtd_them:2,spl4smau:35,split:4,stabl:11,stack:[24,27],stack_dict:24,stack_dim:24,stacked_coord:24,stacked_linspac:4,standard:[18,28],start:[4,10,23],startpoint:12,statu:0,stdin:25,step:4,stop:[2,4,16,22,23],store:[16,18,22,26,27,28],stori:8,str:[4,15,16,18,21,22,23,24,25,26,27,28,30,32],strict:0,stride:[26,27],string:[4,18,25,27,28,35],structur:1,stub:33,style:[2,18,28],sub:[4,12],subclass:[18,23,28,34],sublim:0,submodul:35,subselect:[16,22],subset:[10,16,22,26,27],subtract:4,sum:25,summari:[0,15,16,19,20,21,22,23,24,26,27,28,29,30,31,32],suppli:[16,18,22,26,27,28],support:[2,4,12,16,18,22,26,28,35],sure:4,symbol:0,system:[0,4,23,24,26,27],t18:4,tag:[12,16,22,26],take:[16,22],target:12,tbd:[11,36],techniqu:0,templat:2,test:12,test_funct:0,test_method:0,testclass:0,tex:2,text:[0,27],than:[11,16,22,23],thei:[12,17,22,25,35],theme:2,thi:[0,1,4,11,12,14,16,17,18,22,23,24,25,26,27,28,34,35],thirdfunc:0,those:0,thread:[16,22],three:35,through:12,tick:0,tight:0,tighter:12,time:[2,4,9,16,22,23,25,27],timedelta64:[4,23,25],timedelta:[4,25],to_base_unit:30,toc:2,toctre:13,todo:[3,4,5,6,7,8,23,24,29,34],togeth:[4,16,17,22],tol:23,toler:26,tolist:9,top:35,total:4,traceback:25,track:0,traitlet:[12,30,34],transfer:30,transform:27,transport:[18,28],transpos:[12,24],tri:27,tricki:[16,22,27],troubleshoot:27,tsmtr:35,tupl:[4,18,24,28],two:4,type:[0,4,15,16,18,19,20,21,22,23,24,25,26,28,29,30,31,32,35],type_without_descript:0,typeerror:[23,24,25],u1d:4,ualt:4,ulat:4,ulon:4,ultim:0,undefin:30,under:12,underneath:0,underscor:4,understand:[18,28],unicod:[4,23,24],uniform:4,uniformcoord:23,uniformcoordin:12,uniformli:[4,23],uniqu:[16,22,23,34],unit:[0,4,12,16,17,18,19,22,23,25,26,28],unitdataarrai:[16,17,22],unitsdataarrai:[12,16,17,18,22,26,27,28,30],unitsnod:30,unless:[26,35],unlik:34,unord:24,unstack:[4,24],unstack_dict:24,unsupport:[18,28],until:[0,17,22],unus:[23,24],updat:[12,16,18,22,23,28],update_login:21,ureg:[18,28,30],url:[27,29],usag:12,use:[0,2,4,9,12,14,18,23,27,28,35],usecas:[3,5,6,7,16,22],used:[0,1,4,12,16,18,22,26,27,28,31,35],useful:35,user:[0,2,8,10,16,18,22,26,27,28,29],usernam:[15,21,27,32],uses:[0,18,28],using:[0,2,4,9,11,13,16,18,22,26,27,28,30,35,36],usual:[26,27],utim:4,utm:4,val:25,valid:30,valu:[0,4,16,17,18,22,23,25,26,27,28,30,31,34,35],valueerror:[18,24,26,28],var1:0,var2:0,variabl:[0,27],variant:[18,28],varieti:35,variou:1,version:[4,27],view:10,visit:2,visual:0,vmax:[18,28,29,35],vmin:[18,28,29,35],vol:0,wai:[0,4],want:[4,8,16,22,30],warn:[18,27,28],wcs_coordin:27,wcs_default_cr:27,wcs_default_vers:27,webpag:2,weight:[18,28],welcom:0,well:[16,22,26],were:[16,18,22,26,28],wgs84:[4,24,27],when:[0,4,12,16,18,21,22,25,26,27,28,34,35],where:[0,1,4,12,18,23,24,25,27,28,30],which:[0,4,16,18,22,23,25,27,28],whole:[0,23,24],why:10,wider:0,wiki:21,wildli:[16,22],window:[2,4,11],wish:4,within:[4,23,24],work:[0,4,9,11],workflow:9,would:4,wrang:10,wrangl:27,wrap:[0,29],write:[0,18,28,29,34],written:0,xarrai:[4,16,17,18,22,24,26,28,30],xcoord:24,year:[8,16,22,25],yet:[23,35],yield:[16,22,24],you:[0,2,11,16,22,23,27,34],your:[0,11,34],zero:[18,23,28],zone:4},titles:["Contributing","Design","Documentation","Requirements","Requirements","Requirements","Requirements","Requirements","&lt;no title&gt;","Examples","PODPAC","Install","Roadmap","API Reference","API Quick Reference","podpac.core.authentication.EarthDataSession","podpac.core.compositor.Compositor","podpac.core.compositor.OrderedCompositor","podpac.core.node.Node","podpac.core.node.Style","podpac.settings","podpac.core.authentication","podpac.core.compositor","podpac.core.coordinate.coord","podpac.core.coordinate.coordinate","podpac.core.coordinate.util","podpac.core.data.data","podpac.core.data.type","podpac.core.node","podpac.core.pipeline","podpac.core.units","podpac.core.utils","podpac.datalib.smap","Coordinates","Nodes","Pipelines","References","Why PODPAC"],titleterms:{"case":[3,4,5,6,7],"function":4,AWS:35,One:4,Use:[3,4,5,6,7],algorithm:[34,35],api:[13,14],arraycoordinates1d:4,attribut:[20,23,27,30,32,34,35],authent:[14,15,21],basecoordinates1d:4,bug:12,build:2,clone:11,code:0,common:35,compositor:[16,17,22,34,35],conda:11,contribut:0,coord:23,coordin:[4,13,23,24,25,33],coordinates1d:4,core:[13,14,15,16,17,18,19,21,22,23,24,25,26,27,28,29,30,31],coverag:0,creation:4,custom:34,data:[13,26,27],datalib:32,datasourc:[34,35],definit:35,design:1,develop:[2,3,5,6,7,11],dimens:4,docstr:0,document:2,earthdatasess:15,environ:11,exampl:[3,4,5,6,7,9,34],extend:34,featur:12,file:35,ftp:35,govern:0,helper:4,imag:35,implicit:4,instal:[2,11],integr:0,interfac:[3,5,6,7],lint:0,method:4,miscellan:4,monotoniccoordinates1d:4,multidemension:4,node:[18,19,28,34,35],note:35,oper:4,orderedcompositor:17,organ:2,output:35,paper:36,param:34,pdf:2,pipelin:[29,35],podpac:[10,11,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,37],present:36,properti:4,purpos:10,quick:14,refer:[2,13,14,36],repositori:11,requir:[3,4,5,6,7],roadmap:12,sampl:35,scheme:12,set:[14,20],shorthand:4,smap:32,sourc:13,specif:[3,4,5,6,7],stack:4,stackedcoordin:4,style:[0,19],tag:34,test:[0,2],todo:12,trait:4,type:27,uniformcoordinates1d:4,unit:30,user:[3,5,6,7,11],util:[25,31],version:12,websit:2,why:37}})