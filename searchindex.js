Search.setIndex({docnames:["developer/contributing","developer/design","developer/docs","developer/specs/caching","developer/specs/coordinates","developer/specs/data-source","developer/specs/interpolation","developer/specs/nodes","developer/specs/pipelines","developer/specs/user_stories","examples","index","install","roadmap","user/api","user/api-min","user/api-min/podpac.core.authentication.EarthDataSession","user/api-min/podpac.core.compositor.Compositor","user/api-min/podpac.core.compositor.OrderedCompositor","user/api-min/podpac.core.node.Node","user/api-min/podpac.core.node.Style","user/api-min/podpac.settings","user/api/podpac.core.authentication","user/api/podpac.core.compositor","user/api/podpac.core.coordinate.coord","user/api/podpac.core.coordinate.coordinate","user/api/podpac.core.coordinate.util","user/api/podpac.core.data.data","user/api/podpac.core.data.type","user/api/podpac.core.node","user/api/podpac.core.pipeline","user/api/podpac.core.units","user/api/podpac.core.utils","user/api/podpac.datalib.smap","user/coordinates","user/earthdata","user/nodes","user/pipelines","user/references","why-podpac"],envversion:53,filenames:["developer/contributing.md","developer/design.rst","developer/docs.md","developer/specs/caching.md","developer/specs/coordinates.md","developer/specs/data-source.md","developer/specs/interpolation.md","developer/specs/nodes.md","developer/specs/pipelines.md","developer/specs/user_stories.md","examples.md","index.rst","install.md","roadmap.md","user/api.rst","user/api-min.rst","user/api-min/podpac.core.authentication.EarthDataSession.rst","user/api-min/podpac.core.compositor.Compositor.rst","user/api-min/podpac.core.compositor.OrderedCompositor.rst","user/api-min/podpac.core.node.Node.rst","user/api-min/podpac.core.node.Style.rst","user/api-min/podpac.settings.rst","user/api/podpac.core.authentication.rst","user/api/podpac.core.compositor.rst","user/api/podpac.core.coordinate.coord.rst","user/api/podpac.core.coordinate.coordinate.rst","user/api/podpac.core.coordinate.util.rst","user/api/podpac.core.data.data.rst","user/api/podpac.core.data.type.rst","user/api/podpac.core.node.rst","user/api/podpac.core.pipeline.rst","user/api/podpac.core.units.rst","user/api/podpac.core.utils.rst","user/api/podpac.datalib.smap.rst","user/coordinates.md","user/earthdata.md","user/nodes.md","user/pipelines.md","user/references.md","why-podpac.md"],objects:{"podpac.core":{authentication:[22,0,0,"-"],compositor:[23,0,0,"-"],node:[29,0,0,"-"],pipeline:[30,0,0,"-"],units:[31,0,0,"-"],utils:[32,0,0,"-"]},"podpac.core.authentication":{EarthDataSession:[22,1,1,""],SessionWithHeaderRedirection:[22,1,1,""]},"podpac.core.authentication.EarthDataSession":{__init__:[16,2,1,""]},"podpac.core.authentication.SessionWithHeaderRedirection":{rebuild_auth:[22,2,1,""],update_login:[22,2,1,""]},"podpac.core.compositor":{Compositor:[23,1,1,""],OrderedCompositor:[23,1,1,""]},"podpac.core.compositor.Compositor":{__init__:[17,2,1,""],composite:[23,2,1,""],definition:[23,3,1,""],execute:[23,2,1,""],get_native_coordinates:[23,2,1,""],get_shared_coordinates:[23,2,1,""],get_source_coordinates:[23,2,1,""],iteroutputs:[23,2,1,""]},"podpac.core.compositor.OrderedCompositor":{__init__:[18,2,1,""],composite:[23,2,1,""]},"podpac.core.coordinate":{coord:[24,0,0,"-"],coordinate:[25,0,0,"-"],util:[26,0,0,"-"]},"podpac.core.coordinate.coord":{BaseCoord:[24,1,1,""],Coord:[24,1,1,""],MonotonicCoord:[24,1,1,""],UniformCoord:[24,1,1,""],coord_linspace:[24,4,1,""]},"podpac.core.coordinate.coord.BaseCoord":{add:[24,2,1,""],area_bounds:[24,3,1,""],bounds:[24,3,1,""],concat:[24,2,1,""],coordinates:[24,3,1,""],dtype:[24,3,1,""],intersect:[24,2,1,""],is_datetime:[24,3,1,""],is_descending:[24,3,1,""],is_monotonic:[24,3,1,""],kwargs:[24,3,1,""],rasterio_regularity:[24,3,1,""],scipy_regularity:[24,3,1,""],select:[24,2,1,""],size:[24,3,1,""]},"podpac.core.coordinate.coord.Coord":{is_datetime:[24,3,1,""],is_descending:[24,3,1,""],is_monotonic:[24,3,1,""],rasterio_regularity:[24,3,1,""],scipy_regularity:[24,3,1,""],size:[24,3,1,""]},"podpac.core.coordinate.coord.MonotonicCoord":{bounds:[24,3,1,""],is_descending:[24,3,1,""],is_monotonic:[24,3,1,""]},"podpac.core.coordinate.coord.UniformCoord":{bounds:[24,3,1,""],coords:[24,3,1,""],is_datetime:[24,3,1,""],is_descending:[24,3,1,""],is_monotonic:[24,3,1,""],rasterio_regularity:[24,3,1,""],scipy_regularity:[24,3,1,""],size:[24,3,1,""]},"podpac.core.coordinate.coordinate":{BaseCoordinate:[25,1,1,""],Coordinate:[25,1,1,""],CoordinateGroup:[25,1,1,""],convert_xarray_to_podpac:[25,4,1,""]},"podpac.core.coordinate.coordinate.Coordinate":{add_unique:[25,2,1,""],coords:[25,3,1,""],delta:[25,3,1,""],dims:[25,3,1,""],drop_dims:[25,2,1,""],gdal_crs:[25,3,1,""],get_dims_map:[25,2,1,""],get_shape:[25,2,1,""],intersect:[25,2,1,""],is_stacked:[25,3,1,""],iterchunks:[25,2,1,""],kwargs:[25,3,1,""],replace_coords:[25,2,1,""],shape:[25,3,1,""],stack:[25,2,1,""],stack_dict:[25,2,1,""],transpose:[25,2,1,""],unstack:[25,2,1,""],unstack_dict:[25,2,1,""]},"podpac.core.coordinate.coordinate.CoordinateGroup":{dims:[25,3,1,""],stack:[25,2,1,""],unstack:[25,2,1,""]},"podpac.core.coordinate.util":{add_coord:[26,4,1,""],get_timedelta:[26,4,1,""],get_timedelta_unit:[26,4,1,""],make_coord_delta:[26,4,1,""],make_coord_value:[26,4,1,""],make_timedelta_string:[26,4,1,""]},"podpac.core.data":{data:[27,0,0,"-"],type:[28,0,0,"-"]},"podpac.core.data.data":{DataSource:[27,1,1,""]},"podpac.core.data.data.DataSource":{definition:[27,3,1,""],execute:[27,2,1,""],get_data:[27,2,1,""],get_data_subset:[27,2,1,""],get_native_coordinates:[27,2,1,""],interpolate_irregular_grid:[27,2,1,""],interpolate_point_data:[27,2,1,""],rasterio_interpolation:[27,2,1,""]},"podpac.core.data.type":{NumpyArray:[28,1,1,""],PyDAP:[28,1,1,""],RasterioSource:[28,1,1,""],ReprojectedSource:[28,1,1,""],S3Source:[28,1,1,""],WCS:[28,1,1,""]},"podpac.core.data.type.NumpyArray":{get_data:[28,2,1,""]},"podpac.core.data.type.PyDAP":{get_data:[28,2,1,""],get_native_coordinates:[28,2,1,""],keys:[28,3,1,""]},"podpac.core.data.type.RasterioSource":{band_count:[28,3,1,""],band_descriptions:[28,3,1,""],band_keys:[28,3,1,""],close_dataset:[28,2,1,""],get_band_numbers:[28,2,1,""],get_data:[28,2,1,""],get_native_coordinates:[28,2,1,""]},"podpac.core.data.type.ReprojectedSource":{base_ref:[28,3,1,""],definition:[28,3,1,""],get_data:[28,2,1,""],get_native_coordinates:[28,2,1,""]},"podpac.core.data.type.S3Source":{get_data:[28,2,1,""],native_coordinates:[28,3,1,""]},"podpac.core.data.type.WCS":{base_ref:[28,3,1,""],get_capabilities_url:[28,3,1,""],get_data:[28,2,1,""],native_coordinates:[28,3,1,""]},"podpac.core.node":{Node:[29,1,1,""],NodeException:[29,5,1,""],Style:[29,1,1,""]},"podpac.core.node.Node":{__init__:[19,2,1,""],base_definition:[29,2,1,""],base_ref:[29,3,1,""],cache_dir:[29,3,1,""],cache_obj:[29,2,1,""],cache_path:[29,2,1,""],clear_disk_cache:[29,2,1,""],copy_output_array:[29,2,1,""],definition:[29,3,1,""],evaluated_hash:[29,3,1,""],execute:[29,2,1,""],get_hash:[29,2,1,""],get_image:[29,2,1,""],get_output_coords:[29,2,1,""],get_output_dims:[29,2,1,""],get_output_path:[29,2,1,""],get_output_shape:[29,2,1,""],get_params:[29,2,1,""],init:[29,2,1,""],initialize_array:[29,2,1,""],initialize_coord_array:[29,2,1,""],initialize_output_array:[29,2,1,""],latlon_bounds_str:[29,3,1,""],load:[29,2,1,""],load_cached_obj:[29,2,1,""],pipeline:[29,3,1,""],pipeline_definition:[29,3,1,""],pipeline_json:[29,3,1,""],shape:[29,3,1,""],write:[29,2,1,""]},"podpac.core.node.Style":{__init__:[20,2,1,""]},"podpac.core.pipeline":{AWSOutput:[30,1,1,""],FTPOutput:[30,1,1,""],FileOutput:[30,1,1,""],ImageOutput:[30,1,1,""],NoOutput:[30,1,1,""],Output:[30,1,1,""],Pipeline:[30,1,1,""],PipelineError:[30,5,1,""],PipelineNode:[30,1,1,""],make_pipeline_definition:[30,4,1,""]},"podpac.core.pipeline.FileOutput":{write:[30,2,1,""]},"podpac.core.pipeline.ImageOutput":{write:[30,2,1,""]},"podpac.core.pipeline.NoOutput":{write:[30,2,1,""]},"podpac.core.pipeline.Output":{write:[30,2,1,""]},"podpac.core.pipeline.Pipeline":{check_execution_graph:[30,2,1,""],check_params:[30,2,1,""],execute:[30,2,1,""],parse_node:[30,2,1,""],parse_output:[30,2,1,""]},"podpac.core.pipeline.PipelineNode":{execute:[30,2,1,""]},"podpac.core.units":{Units:[31,1,1,""],UnitsDataArray:[31,1,1,""],UnitsNode:[31,1,1,""]},"podpac.core.units.Units":{validate:[31,2,1,""]},"podpac.core.units.UnitsDataArray":{cumsum:[31,2,1,""],max:[31,2,1,""],mean:[31,2,1,""],min:[31,2,1,""],part_transpose:[31,2,1,""],set:[31,2,1,""],sum:[31,2,1,""],to:[31,2,1,""],to_base_units:[31,2,1,""]},"podpac.core.units.UnitsNode":{validate:[31,2,1,""]},"podpac.core.utils":{cached_property:[32,4,1,""],clear_cache:[32,4,1,""],common_doc:[32,4,1,""],get_settings_file:[32,4,1,""],load_setting:[32,4,1,""],save_setting:[32,4,1,""]},"podpac.datalib":{smap:[33,0,0,"-"]},"podpac.datalib.smap":{SMAP:[33,1,1,""],SMAPBestAvailable:[33,1,1,""],SMAPDateFolder:[33,1,1,""],SMAPPorosity:[33,1,1,""],SMAPProperties:[33,1,1,""],SMAPSource:[33,1,1,""],SMAPWilt:[33,1,1,""],np2smap_date:[33,4,1,""],smap2np_date:[33,4,1,""]},"podpac.datalib.smap.SMAP":{base_ref:[33,3,1,""],definition:[33,3,1,""],get_available_times_dates:[33,2,1,""],get_partial_native_coordinates_sources:[33,2,1,""],get_shared_coordinates:[33,2,1,""],get_source_coordinates:[33,2,1,""],keys:[33,3,1,""],source:[33,3,1,""]},"podpac.datalib.smap.SMAPDateFolder":{get_available_coords_sources:[33,2,1,""],get_shared_coordinates:[33,2,1,""],get_source_coordinates:[33,2,1,""],keys:[33,3,1,""],source:[33,3,1,""]},"podpac.datalib.smap.SMAPProperties":{get_native_coordinates:[33,2,1,""]},"podpac.datalib.smap.SMAPSource":{get_available_times:[33,2,1,""],get_data:[33,2,1,""],get_native_coordinates:[33,2,1,""],latkey:[33,3,1,""],lonkey:[33,3,1,""],product:[33,3,1,""]},podpac:{settings:[21,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception"},terms:{"3rd":0,"5th":4,"boolean":[4,17,23,25,27,28,37],"break":13,"case":[0,13,17,23,27,31],"class":[0,1,4,15,16,17,18,19,20,22,23,24,25,27,28,29,30,31,33,35,36,37],"default":[0,4,5,13,17,19,23,24,25,27,28,29,30,36,37],"enum":[4,5],"final":[9,19,29],"float":[4,19,24,25,26,29],"function":[0,1,5,13,15,19,24,25,26,29,30,32,33],"import":[0,10,35,37],"int":[0,4,5,17,23,25,28],"long":[0,17,23],"new":[0,4,5,12,17,23,24,25,26,27,36],"return":[0,4,5,17,18,19,22,23,24,25,26,27,28,29,30,31,32,33],"static":2,"true":[5,17,19,23,24,25,27,29,36,37],"try":[0,5,12],"var":0,"while":0,AWS:[1,11,13],Adding:0,And:[0,2],CRS:4,For:[0,4,12,13,17,19,23,24,25,29,31,35,36,37],GIS:0,IDE:0,Not:[10,19,24,29,37],One:[17,23],The:[0,1,2,4,5,10,11,12,13,17,19,23,24,25,26,27,28,29,36,37],Then:[2,35],There:0,These:[0,5,12],Use:11,Uses:[19,28,29],Using:35,WCS:[5,10,28],With:22,__doc__:32,__init__:[16,17,18,19,20],_alat:4,_ca:4,_cl:4,_cm:4,_cu:4,_determine_source_coordin:5,_interpol:5,_interpolate_coordin:5,_intersect_coordin:5,_post_get_data:5,_pre_get_data:5,_sl:4,_static:2,_templat:2,_ualt:4,_ulat:4,_ulon:4,_utim:4,a1d:4,abl:36,about:0,abov:[0,4],accept:0,access:[0,1,5,10,11,13,22,28,35],account:10,accur:[16,17,20,23],activ:12,actual:[0,4,17,23,28],adapt:0,add:[0,2,3,4,5,6,7,8,9,13,24,26],add_coord:26,add_dim:4,add_uniqu:25,added:26,adding:26,addit:[0,4,19,25,29,35,36],adher:0,advic:5,affect:5,affin:28,after:[5,12,17,19,23,28,29],again:36,against:28,alat:4,alglib:1,algorithm:[0,1,10,11,19,29],alia:5,alias:4,align:4,all:[0,2,4,5,10,12,15,17,19,23,24,25,27,28,29,37],all_cach:[19,29],alloc:[17,19,23,27,29],allow:[4,5,13,17,23],allow_non:[31,36],along:[24,25,27],alreadi:0,also:[0,4,5,17,19,23,26,28,29,36,37],alt:[4,28],altern:5,amongst:[17,23],ams2018:38,anaconda:12,analysi:11,ani:[0,5,17,19,23,25,27,28,29],anonym:0,anoth:[4,28],api:[2,11],app:35,appear:[18,23],append:13,applic:35,appropri:5,approv:35,arbitrari:[4,5],architectur:11,archiv:35,area:[4,28],area_bound:[4,24],arg:[20,24,25,29,30,31],argument:[19,28,29],arithmet:37,arr:[19,29],arrai:[0,4,5,17,19,23,24,25,26,27,28,29,31],array_lik:0,artifact:0,ascend:24,assign:[19,29],assum:[0,12],attent:28,attr:[19,29,31,32,36,37],attribut:[13,16,17,18,19,20,22,23,25,27,29,30],auth:22,auth_class:[28,33],auth_host:[16,22],auth_sess:[28,33,35],authent:[28,35],author:35,auto:[0,2,5],autobuild:2,autodoc:2,autodoc_default_flag:14,autodocstr:0,autogen:[2,14],autogener:[14,15],autom:13,automat:[2,5,13,14,17,19,23,28,29,35,37],avail:28,averag:[5,28],avoid:0,awar:[17,18,19,23,27,29],aws:[17,19,23,27,29,37],awsoutput:30,back:0,backblaz:5,backward:[13,24],badexcept:0,band:28,band_count:28,band_descript:28,band_kei:28,base64:[19,29],base:[1,4,5,17,18,19,23,24,25,26,27,28,29],base_definit:[19,29],base_defit:[19,29],base_ref:[19,28,29,33],base_url:33,basecoord:24,basecoordin:25,basic:[5,24,37],becaus:[0,10,17,23,24,26,28],been:[19,29],befor:[5,37],behav:[4,13],behavior:37,being:[19,28,29],below:14,benefit:0,best:28,between:[24,25],beyond:24,bilinear:[5,37],bilinearli:28,bleed:12,bool:[17,19,21,23,24,27,29,37],both:0,bottom:35,bound:[4,19,24,25,29],box:[4,24],bracket:0,branch:[0,12],browser:2,bucket:[5,28,30],bug:0,button:35,cach:[2,13,17,19,23,29],cache_dir:[19,29],cache_native_coordin:[17,23,33],cache_obj:[19,29],cache_path:[19,29],cache_to_s3:21,cache_typ:[19,29],cached_properti:32,calcul:[4,5,17,23,24],call:[5,26],can:[0,4,5,10,11,17,19,23,26,27,28,29,35,36,37],cannot:[19,26,28,29,36],capabl:28,captur:1,cast:[4,24,26],certain:4,certiain:4,cfg:0,chang:[0,2,17,23,32],channel:12,charact:26,check:[0,4],check_dim_repeat:25,check_execution_graph:30,check_param:30,checkout:[0,12],cherri:15,child:[5,27,28,35],children:[17,19,23,27,29],choic:0,choos:4,chunk:25,cite:0,clear:[19,29],clear_cach:32,clear_disk_cach:[19,29],click:35,clim:[20,29],close:28,close_dataset:28,cloud:[1,11,19,29],cmap:[20,29],code:[2,12,19,29,35],coeffici:[19,29],collabor:11,colormap:[19,29,37],com:12,combin:[4,11,18,23],command:0,comment:0,common:[4,17,19,23,26,29],common_doc:32,common_parameters_listed_abov:0,commond:32,commun:[0,13],compat:[0,13,24,28],complet:[17,23],complex:0,complic:5,complient:28,composit:[11,17,18,23,37],compositor:[19,29],comput:[0,11,12],concat:[4,24],concaten:[4,24,25],concern:28,conda:2,conf:2,config:[14,31],configur:[0,2],consid:4,construct:[17,23,28],contain:[1,4,17,18,19,23,27,28,29,37],contribut:[11,13],control:[0,19,29],contruct:5,contructor:5,conveni:35,convert:[0,2,24,25,26],convert_xarray_to_podpac:25,convienc:2,convolut:13,coodin:4,coodinates_slic:[27,28],coord:[4,10,19,25,29,31,36],coord_linspac:24,coord_ref_si:[4,24,25],coordin:[5,9,10,11,13,17,19,23,27,28,29,30,33],coordinate1d:4,coordinategroup:25,coordinates_index:5,coordinates_slic:[28,33],coordinates_sourc:28,coordint:4,coords_copi:4,coords_dst:27,coords_src:27,coords_subset:27,copi:[2,4,19,25,29],copy_output_arrai:[19,29],core:[0,1,12,35,36],correct:[0,17,19,23,25,26,27,29],correspond:25,could:[0,5,15,17,23],cov:0,coverag:13,coveral:0,crear:12,creat:[0,4,5,10,12,19,28,29],creation:13,creep:0,criteria:28,crs:28,ctype:[4,24,25],cubic:5,cumsum:31,current:[17,19,23,27,29,37],custom:[0,13,24,37],dai:[17,23,26],dalta:26,dap:28,dask:13,data:[1,4,5,9,10,11,13,17,19,22,23,29,31,36],data_dst:27,data_src:27,data_subset:5,dataarrai:[4,17,18,19,23,25,27,29,31],dataarraycoordin:25,datakei:28,datalib:[1,10,37],dataset:[5,17,23,28,35,37],datasettyp:28,datasourc:[0,13,17,19,23,27,28,29],datasubset:27,datatyp:[12,19,29],date:[9,17,23,26,33],date_file_url_r:33,date_time_file_url_r:33,date_time_url_r:33,date_url_r:33,datetim:[24,26],datetime64:[4,24,26],decid:0,decor:32,decreas:24,def:[0,5],default_valu:[31,36],defin:[4,5,17,19,23,24,29,36,37],definit:[5,13,17,19,23,27,28,29,30,33,36],definition_return:[19,29],defint:[17,23,27],delet:[19,29],delta:[4,24,25,26],demo:9,demonstr:1,depend:[4,5,12,27,28],deploy:1,deprec:[19,25,29],deriv:[17,19,23,27,28,29],descend:24,describ:[0,4,17,23,27,28,37],descrip:[19,29],descript:[0,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,32,33],design:[11,36],desir:[17,19,23,29],destin:37,detail:[0,4,35],detect:2,determin:[5,17,19,23,28,29],deval:12,develop:[0,10,11,13,17,23,27],dict:[4,17,19,23,25,27,28,29,30,32],dictioari:[19,29],dictionari:[4,5,17,19,23,24,25,27,29,32,37],differ:[4,17,23,26,28],dim:[4,5,19,25,29,31],dimens:[13,17,19,23,24,25,27,28,29],dimension:26,dims_map:25,direct:[4,14],directli:[27,28],directori:[0,1,2,19,29],disciplin:0,discrib:[19,29],disk:[19,28,29],displai:[19,22,29],dist:1,distance_unit:4,distribut:[2,12],divid:24,divisor:26,dlat:4,dlon:4,doc:[1,2],doc_dict:32,docstr:[2,32],doctest:[0,2,25],doctr:[13,32],document:[0,1,11,13,14,15],doe:[0,4,17,23],doesn:[5,19,28,29],doing:28,domain:[0,1],don:5,done:0,down:[17,23],download:28,downsampl:4,downscaled_sm:37,drop:4,drop_dim:[4,25],dtype:[4,19,24,29],due:4,duplic:25,dure:[2,13],each:[2,4,13,17,23,24,25,35,36,37],earth:[10,11],earthdata:[22,28],earthdatasess:[22,35],eas:4,easier:[0,15],edg:12,editor:0,eds:35,effici:[17,23,28],either:[0,4,27,28,35],element:4,els:24,empti:[4,19,24,29],enabl:[13,35],encod:[19,29,31],encount:12,encourag:0,end:[4,13,24],endpoint:[13,28],enter:[2,35],entir:[17,19,23,29],entri:2,enumeration_color:[20,29],enumeration_legend:[20,29],environ:1,environment:0,epsg:[24,28],eqn:37,equal:28,equat:[19,29],equival:[4,37],error:[19,28,29],especi:[17,23],essenti:1,etc:[0,2,4,17,19,23,27,29,30],evalu:[13,17,19,23,28,29,37],evaluated_coordin:[19,29],evaluated_hash:[19,29],even:[0,4],everi:[4,17,23,35],everyth:[13,17,19,23,29],exactli:5,exampl:[0,1,11,17,19,23,26,27,29,35,37],exce:26,except:[4,19,28,29,30],execut:[5,10,13,17,18,19,23,27,29,30,36,37],execute_param:[19,29],exist:[4,5,12,19,29],expand:13,expect:[19,29],experi:12,expert:0,expir:13,explan:0,explicit:4,explicitli:[4,37],extend:[0,5,19,29],extent:[4,24],extract:26,facilit:[4,11],fail:5,fairli:0,fals:[17,19,23,24,25,29,30,31,36,37],faster:[17,23],fastpath:31,featur:0,feed:28,feet:4,fetch:28,few:[5,17,23,27],fewer:24,field:32,fifthfunc:0,file:[0,2,5,19,26,28,29,30,35],file_handl:28,file_url_r:33,file_url_re2:33,filenam:[19,29],fileoutput:30,filepath:[5,27],fill:[4,17,23],fillval:[5,19,29],find:[28,35],first:[0,17,23],fit:28,fix:13,flag:[17,19,23,29],flat:5,flatten:30,float64:4,focu:[11,31],folder:[17,23],folder_d:33,follow:[0,1,2,4,10,13,35],folow:4,forg:12,fork:0,form:26,format:[0,2,5,13,19,29,30,32,37],found:10,fourthfunc:0,free:4,from:[0,2,4,5,12,19,22,25,26,27,28,29,35,37],ftpoutput:30,full:[14,19,24,29,37],func:32,futur:[19,29],fuzzi:0,gauss:5,gdal:25,gdal_cr:25,gener:[0,1,2,4,10,13,18,23,31],geodet:4,geodic:28,geoscienc:0,geoserv:5,geospati:[11,13],geotif:37,geotiff:[5,28],gesdic:35,get:[0,4,5,9,11,17,19,23,24,26,29],get_available_coords_sourc:33,get_available_tim:33,get_available_times_d:33,get_band_numb:28,get_capabilities_url:28,get_data:[5,27,28,33],get_data_subset:27,get_descript:[19,29],get_dim:4,get_dims_map:25,get_hash:[19,29],get_imag:[19,29],get_native_coordin:[5,17,23,27,28,33],get_output_coord:[19,29],get_output_dim:[19,29],get_output_path:[19,29],get_output_shap:[19,29],get_param:[19,29],get_partial_native_coordinates_sourc:33,get_settings_fil:32,get_shap:25,get_shared_coordin:[17,23,33],get_source_coordin:[17,23,33],get_timedelta:26,get_timedelta_unit:26,git:[0,12,13],github:[0,11,12],give:[4,18,23,27,28],given:[4,5,19,24,25,29],going:0,gov:22,greek:0,grid:[4,27],group:[0,13],groupcoordin:[17,23],guarante:[13,24],guarente:5,guid:11,habitat:0,haggi:0,handl:[13,26,31,36],hard:[17,23],has:[17,19,23,28,29],hash:[13,19,29],hash_return:[19,29],have:[0,4,17,19,23,26,27,28,29,31,35],head:13,header:[22,28],help:[0,13,16,19,20,29,31],helper:[19,29],here:0,high:[13,24],highland:0,hold:[17,23],home:35,host:22,hotfix:13,hour:[17,23],how:[0,2,4,13,17,19,22,23,26,27,29],html:[0,1,2],http:[2,12,22],identifi:13,ignor:[4,19,29],illustr:0,imag:[1,2,19,29,30],imageoutput:30,implement:[0,1,4,5,13,17,19,23,24,27,28,29,37],implicit_pipeline_evalu:[19,29,30],implicitli:[4,37],improv:13,in_plac:25,includ:[0,1,2,4,5,12,13,17,19,23,24,29,30,36,37],incompat:26,incomplet:[13,17,23],incorpor:0,incorrect:13,increas:[13,24],ind:[24,25],index:[2,4,5,17,23,24,28],indic:[17,19,23,24,25,27,28,29],individu:4,info_text:31,inform:[17,23],init:[19,29],init_typ:[19,29],initi:[16,19,20,29],initialize_arrai:[19,29],initialize_coord_arrai:[5,19,29],initialize_output_arrai:[19,29],inlin:0,inplac:24,input:[2,4,5,13,17,19,23,24,26,27,29,30,37],instal:[1,11,28],instanc:[19,28,29],instanti:[28,36],instead:[5,12,24,25,28],instruct:[1,12,35],integ:[26,36],integr:13,intent:12,interact:35,interest:35,interfac:[0,4,13,17,19,23,29],intern:10,interpol:[4,5,11,13,17,19,23,27,28,29,37],interpolate_irregular_grid:27,interpolate_point_data:27,interpolation_param:[5,27],interpret:[2,5,26,27,28],intersect:[4,24,25,27],invoc:13,irregularli:4,is_datetim:[4,24],is_descend:[4,24],is_enumer:[20,29],is_monoton:[4,24],is_source_coordinates_complet:[17,23],is_stack:25,issu:[0,12,13,35],item:25,iter:4,iterchunk:25,iteroutput:[17,23],its:[4,5,17,19,23,25,27,29,37],join:4,jointli:[19,29],json:[19,29,35,37],jupyt:[1,10],just:[5,17,23],kappa:37,keep:22,kei:[4,28,32,33],keyerror:4,keyword:[19,28,29],kind:5,known:13,krige:0,kwarg:[5,17,18,19,20,23,24,25,27,28,29,30,31,33],l1d:4,label:4,lambda:13,lanczo:5,larger:28,last:[19,26,29],lat:[4,5,9,10,25,28],lat_lon:[4,25],late:2,later:[36,37],latex:2,latitud:[19,29],latkei:33,latlon_bounds_str:[19,29],latlon_delta:33,latlon_url_r:33,layer:28,layer_nam:28,layer_styl:[19,29],layerkei:33,left:28,len:4,let:12,level:[17,23,37],librari:[0,1,10,22],light:[19,29],like:[0,4,31],likewis:31,limit:[1,15,17,23],line:[0,4,26],linspac:4,linux:[12,35],list:[0,4,5,17,19,23,24,25,27,28,29,30,33,37],literatur:0,littl:28,live:2,load:[5,19,28,29],load_cached_obj:[19,29],load_set:32,local:[5,17,19,23,27,29],locat:[5,17,19,23,27,29,37],log:35,logic:0,login:28,lon:[4,5,9,10,28],long_var_nam:0,longitud:[19,29],lonkei:33,look:0,low:[17,23,24],m1d:4,mac:[2,12],machin:12,mactex:2,mai:[0,1,4,5,12,17,19,23,24,27,28,29,35,36],main_nod:30,major:13,make:[0,2,4,15,17,23,25,26,30],make_coord_delta:26,make_coord_valu:26,make_pipeline_definit:30,make_timedelta_str:26,mani:[0,17,23],mantain:22,manual:2,map:[4,25],mark:0,markdown:2,marker:0,mask:31,master:12,match:[27,28],math:0,matur:0,max:[5,13,24,31,37],maximum:[19,29],mcnoleg:0,mean:[0,31],mechan:[13,19,28,29],med:5,member:[14,15],memori:[17,19,23,27,29,37],metadata:[26,28],method:[0,5,15,16,17,18,19,20,23,27,28,29,35],miktex:2,min:[2,5,24,31,37],minim:2,minimum:[19,29],minor:13,minut:[17,23],mismatch:4,miss:0,mock:5,mockdatasourc:5,mode:[5,12,37],model:[0,28],modif:0,modifi:[0,4,13,17,19,22,23,27,29],modul:[0,5,14,26,31,37],moment:12,monitor:0,monoton:[13,24],monotoniccoord:24,month:[17,23,26],more:[0,2,4,5,17,18,23,24,35,37],most:[0,26],move:[4,13],much:[17,23],multi:[17,23],multidimension:25,multiindex:4,multipl:[0,4,17,23,28],must:[5,17,23,24,26,37],my_attr:36,my_new_featur:0,my_param1:36,my_param2:36,mycompositor:37,mycustomnod:37,mydatasourc:36,mymodul:37,mynod:37,mynode1:37,mynode2:37,myothernod:37,myplugin:37,mythirdnod:37,n_thread:[17,23],nad87:4,name:[0,4,5,17,19,20,23,27,28,29,30,31,37],nan:[5,18,19,23,27,28,29],nan_val:5,nanval:5,nasa:[5,10,11,17,22,23],nativ:[4,5,9,17,19,23,28,29],native_coordin:[5,17,19,23,27,28,29,30],ndarrai:[0,17,19,23,24,28,29,31],ndim:4,nearest:5,necessari:5,need:[0,2,4,5,17,19,23,27,28,29,35,36],nest:0,network:[0,28],neural:0,new_crd:25,new_dim:31,newfunc:0,next:[24,25],nice:24,no_data_v:[27,33],no_styl:[19,29],nodata:5,node:[0,1,5,10,11,13,17,18,23,27,28,30,35],node_cach:[19,29],node_class:28,node_default:[19,29],node_kwarg:28,nodeexcept:[19,29],nomin:26,non:[5,17,23,24,28,37],none:[4,5,13,16,17,18,19,20,22,23,24,25,27,28,29,30,31,32],none_v:5,nonev:5,nonlinear:26,nooutput:30,note:[0,4,10,17,19,23,24,26,27,28,29,35],notebook:[1,10],notimplementederror:[5,17,19,23,24,27,28,29,30],now:[0,31],np2smap_dat:33,nsidc:35,nsidc_datapool_op:35,num:24,number:[0,19,24,25,26,28,29,37],numer:[4,24],numpi:[0,5,17,19,23,26,27,28,29],numpyarrai:28,obj:[19,29,31],object:[0,4,13,19,24,25,27,28,29,37],observ:11,obtain:27,ogc:28,omega:0,omit:37,onc:[17,18,23,35],one:[0,2,4,5,17,23,25,37],ones:[19,29],onli:[0,4,12,17,19,23,27,29],only_seldom_used_keyword:0,onto:12,open:28,opendap:[28,35],opendap_url:35,oper:5,oppos:[4,17,23],optim:[17,23],option:[0,2,4,5,14,15,17,18,19,22,23,24,25,27,28,29,30,31,32,36,37],order:[5,18,23,24,25,28],orderedcompositor:[23,37],ordereddct:[19,29],ordereddict:[4,17,19,23,25,27,28,29],orient:0,origin:12,other:[0,2,4,5,12,13,24,25,37],other_coord:25,otherfunc:0,otherwis:[5,17,19,23,24,29],our:[0,35],out:0,out_dir:[19,29],outdir:[19,29,30,37],outlin:2,output:[0,5,13,17,18,19,23,27,29,30,36],output_nod:30,outputdata:37,over:[2,4,9,17,23,28],overload:28,overrid:[4,15,22],overwrit:[4,17,18,19,29],own:[5,17,19,23,27,29,36],packag:[0,2,12],pad:25,page:[1,2,35],pai:28,panda:4,paragraph:0,parallel:[13,17,19,23,27,29],param:[5,13,17,19,23,27,29,30,37],paramet:[0,17,18,19,22,23,24,25,26,27,28,29,30,31,32,33,36,37],pars:[4,24],parse_nod:30,parse_output:30,part:[4,17,19,23,29,35],part_transpos:31,parti:0,particular:[1,9,13,31,36],pass:[0,4,17,19,23,28,29,36],password:[16,22,28,33,35],path:[12,19,28,29,30,32,37],pdflatex:2,pep8:0,perman:[19,29],physic:4,pick:[5,15],pickl:[19,29,37],pint:[19,29],pip:[2,12],pipelin:[5,10,11,13,17,19,23,27,28,29,36],pipeline_definit:[19,29],pipeline_json:[19,29,30],pipelineerror:30,pipelinenod:30,place:[4,13,24,25],plain:[28,35],plan:[19,29],platform:12,plot:[19,29],plugin:[0,17,23,27,37],png:[19,29,37],podpac:[0,1,2,5,10,13,37,38],podpact:25,point:[0,4,13,17,23,24,25],pointer:28,portion:24,possibl:[4,10,31],potentailli:5,potenti:[5,13],potential:25,pre:[17,23],prefix:[19,29],prepared_request:22,prepend:37,present:[0,19,28,29],preserv:4,press:2,preview:5,primari:[19,29],print:0,priorit:13,prioriti:13,privat:5,procedur:12,process:[0,5,11,13,36],produc:37,product:[10,11,33,37],profil:35,project:[0,11],promot:13,prompt:35,properli:0,properti:[5,19,24,25,29,33],provid:[0,5,28,35,37],pull:0,pydap:[28,35],pydap_nod:35,pylint:0,pylintrc:0,pytest:0,python:[0,1,2,4,12,22,35],quantiz:24,quick:[5,11],quickli:5,rais:[0,4,5,17,19,23,24,25,26,27,28,29,30,33],ram:[19,28,29],rand:5,random:5,rasterio:[12,28],rasterio_interpol:27,rasterio_regular:[4,24],rasteriosourc:28,read:[2,4],read_onli:31,readi:35,rebuild:2,rebuild_auth:22,rebuilt:2,recent:26,recommend:[4,12],recommonmark:2,record:[0,13],redirect:[22,28],refactor:13,refer:[0,4,11,19,24,25,28,29],referenc:[13,37],region:9,regist:35,registr:35,registri:[19,29],regularli:4,reject:0,rel:[17,23,37],relationship:0,releas:13,relev:0,reload:2,remain:13,remot:0,remov:[4,5,25],renam:5,reorder:25,repeat:28,replac:[4,17,23,25,32,37],replace_coord:25,report:0,repositori:0,repres:4,reproject:13,reprojected_coordin:28,reprojectedsourc:28,request:[0,4,5,13,17,18,19,22,23,27,28,29],requested_coordin:5,requested_source_coordin:5,requested_source_coordinates_index:5,requir:[10,17,23,27,28,35,37],resid:28,resolut:[4,28],respect:24,respons:22,result:[4,17,18,23,24,26,27],rethink:13,retreiv:[19,29],retriev:[10,19,27,28,29,35],return_slic:25,return_typ:28,revers:25,review:0,rewritten:4,roadmap:[0,11],root:[0,2,19,29],root_path:21,rootdatakei:33,rotat:4,rst:2,rtd:2,rule:[17,23],run:[0,2,19,29,35],runtim:[17,19,23,27,29],runtimeerror:33,s3_bucket:28,s3_bucket_nam:[21,28],s3_data:28,s3sourc:28,safe:4,same:[17,23,24],save_set:32,scheme:4,scienc:11,scientif:1,scientist:11,scipy_regular:[4,24],screen:35,script:[2,35],scroll:35,seamless:11,second:[17,23],section:[0,2,13],secur:[28,35],see:[0,2,5,10,16,19,20,24,29,37],seem:[17,23],segment:[4,24,25],segment_posit:[4,24,25],select:[4,24],self:[0,4,5,16,18,19,20,23,28,29,32],sens:0,sentenc:0,seper:0,serial:[17,19,23,27,28,29],serv:[2,5,19,29],server:[2,5,17,23,28],servic:[19,28,29],session:[22,28,35],sessionwithheaderredirect:[22,28],set:[0,4,5,17,19,23,25,26,27,28,29,31,36,37],setup:0,sever:[0,37],shape:[4,13,19,25,29,30],share:[11,17,19,23,29],shared_coordin:[17,23],shortcut:5,should:[0,4,5,11,13,19,27,28,29,35,36,37],shouldn:0,sign:24,signatur:[16,20],silent:13,simpl:5,simpler:12,simpli:2,simultan:[17,23],singl:[0,4,17,23,24,25,27,31],singleton:26,size:[4,13,19,24,29],skip:25,skip_evalu:30,slice:[4,24,25,27,28],slightli:15,slower:[17,23],small:[0,17,23],smap2np_dat:33,smap:[1,9,10,37],smap_base_url:33,smap_incomplete_source_coordin:33,smap_product_map:[10,33],smap_product_opt:10,smapbestavail:33,smapdatefold:33,smapporos:33,smapproperti:33,smapsourc:33,smapwilt:33,softwar:0,some:[0,4,5,12,19,28,29],somewhat:12,sort:[4,24],sourc:[1,2,5,10,11,12,16,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,35,36,37],source_coordin:[5,17,23],source_interpol:28,source_pipelin:30,sourcea:37,sourceb:37,sourcec:37,space:[4,24],spec:[3,5,6,7,8],specif:[0,1,13,15,19,24,29],specifi:[0,4,13,15,19,24,25,28,29],sphinx:[1,2,14],sphinx_rtd_them:2,spl4smau:37,spline:5,split:4,stabl:12,stack:[25,28],stack_dict:25,stack_dim:25,stacked_coord:25,stacked_linspac:4,stage:35,standard:[19,29],start:[4,11,24],startpoint:13,statu:0,stdin:26,step:4,stop:[2,4,17,23,24],store:[5,17,19,23,27,28,29,35],stori:9,str:[4,16,17,19,22,23,24,25,26,27,28,29,31,33],strict:0,stride:[27,28],string:[4,19,26,28,29,37],structur:1,stub:34,style:[2,19,29],sub:[4,13],subclass:[5,19,24,29,36],sublim:0,submodul:37,subselect:[17,23],subset:[5,11,17,23,27,28],subtract:4,sum:[26,31],summari:[0,16,17,20,21,22,23,24,25,27,28,29,30,31,32,33],suppli:[5,17,19,23,27,28,29],support:[2,4,13,17,19,23,27,29,37],sure:4,symbol:0,system:[0,4,24,25,27,28,35],t18:4,tabular:5,tag:[13,17,23,27],take:[5,17,23],target:13,tbd:[12,38],techniqu:0,templat:2,test:[5,13],test_funct:0,test_method:0,testclass:0,tex:2,text:[0,28,35],than:[12,17,23,24],thei:[5,13,18,23,26,37],theme:2,thi:[0,1,4,5,12,13,15,17,18,19,23,24,25,26,27,28,29,35,36,37],thirdfunc:0,those:0,thread:[17,23],three:37,through:[13,35],tick:0,tight:0,tighter:13,time:[2,4,10,17,23,24,26,28,35],timedelta64:[4,24,26],timedelta:[4,26],to_base_unit:31,toc:2,toctre:14,todo:[3,4,5,6,7,8,9,24,25,30,36],togeth:[4,17,18,23],tol:24,toler:27,tolist:10,top:37,total:4,traceback:26,track:0,trait:5,traitlet:[13,31,36],transfer:31,transform:28,translat:5,translate_requested_coordin:5,transport:[19,29],transpos:[13,25],tri:28,tricki:[17,23,28],troubleshoot:28,tsmtr:37,tupl:[4,19,25,29],two:4,type:[0,4,5,16,17,19,20,21,22,23,24,25,26,27,29,30,31,32,33,35,37],type_without_descript:0,typeerror:[24,25,26],u1d:4,ualt:4,ulat:4,ulon:4,ultim:0,undefin:31,under:[13,35],underneath:0,underscor:4,understand:[19,29],unicod:[4,24,25],uniform:4,uniformcoord:24,uniformcoordin:13,uniformli:[4,24],uniqu:[17,23,24,36],unit:[0,4,13,17,18,19,20,23,24,26,27,29],unitdataarrai:[17,18,23],unitsdataarrai:[5,13,17,18,19,23,27,28,29,31],unitsnod:31,unless:[27,37],unlik:36,unord:25,unstack:[4,25],unstack_dict:25,unsupport:[19,29],until:[0,18,23],unus:[24,25],updat:[13,17,19,23,24,29],update_login:[22,35],ureg:[19,29,31],url:[28,30],usag:13,use:[0,2,4,5,10,13,15,19,24,28,29,35,37],usecas:[3,6,7,8,17,23],used:[0,1,4,13,17,19,23,27,28,29,32,37],useful:37,user:[0,2,9,11,17,19,23,27,28,29,30,35],usernam:[16,22,28,33,35],uses:[0,19,29],using:[0,2,4,5,10,12,14,17,19,23,27,28,29,31,35,37,38],usual:[27,28,35],utim:4,utm:4,val:26,valid:31,valu:[0,4,5,17,18,19,23,24,26,27,28,29,31,32,36,37],valueerror:[19,25,27,29],var1:0,var2:0,variabl:[0,28],variant:[19,29],varieti:37,variou:1,version:[4,28],via:5,view:11,visit:2,visual:0,vmax:[19,29,30,37],vmin:[19,29,30,37],vol:0,wai:[0,4],want:[4,5,9,17,23,31],warn:[19,28,29],wcs_coordin:28,wcs_default_cr:28,wcs_default_vers:28,wealth:35,webpag:2,weight:[19,29],welcom:0,well:[17,23,27],were:[17,19,23,27,29],wgs84:[4,25,28],when:[0,4,5,13,17,19,22,23,26,27,28,29,36,37],where:[0,1,4,13,19,24,25,26,28,29,31,35],which:[0,4,5,17,19,23,24,26,28,29],whole:[0,24,25],why:11,wider:0,wiki:22,wildli:[17,23],window:[2,4,12,35],wish:4,within:[4,24,25],work:[0,4,10,12],workflow:10,would:[4,5],wrang:11,wrangl:28,wrap:[0,30],write:[0,19,29,30,36],written:0,xarrai:[4,17,18,19,23,25,27,29,31],xcoord:25,year:[9,17,23,26],yet:[24,37],yield:[17,23,25],you:[0,2,5,12,17,23,24,28,35,36],your:[0,12,35,36],zero:[19,24,29],zone:4},titles:["Contributing","Design","Documentation","Requirements","Requirements","Requirements","Requirements","Requirements","Requirements","&lt;no title&gt;","Examples","PODPAC","Install","Roadmap","API Reference","API Quick Reference","podpac.core.authentication.EarthDataSession","podpac.core.compositor.Compositor","podpac.core.compositor.OrderedCompositor","podpac.core.node.Node","podpac.core.node.Style","podpac.settings","podpac.core.authentication","podpac.core.compositor","podpac.core.coordinate.coord","podpac.core.coordinate.coordinate","podpac.core.coordinate.util","podpac.core.data.data","podpac.core.data.type","podpac.core.node","podpac.core.pipeline","podpac.core.units","podpac.core.utils","podpac.datalib.smap","Coordinates","NASA Earth Data","Nodes","Pipelines","References","Why PODPAC"],titleterms:{"case":[3,4,5,6,7,8],"class":5,"function":4,AWS:37,One:4,Use:[3,4,5,6,7,8],account:35,algorithm:[36,37],api:[14,15],arraycoordinates1d:4,attribut:[21,24,28,31,33,36,37],authent:[15,16,22],basecoordinates1d:4,bug:13,build:2,clone:12,code:0,common:37,compositor:[17,18,23,36,37],conda:12,contribut:0,coord:24,coordin:[4,14,24,25,26,34],coordinates1d:4,core:[14,15,16,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32],coverag:0,creat:35,creation:4,credenti:35,custom:36,data:[14,27,28,35],datalib:33,datasourc:[5,36,37],definit:37,design:1,develop:[2,3,5,6,7,8,12],dimens:4,docstr:0,document:2,earth:35,earthdata:35,earthdatasess:16,environ:12,exampl:[3,4,5,6,7,8,10,36],extend:36,featur:13,file:37,ftp:37,govern:0,helper:4,imag:37,implicit:4,instal:[2,12],integr:0,interfac:[3,5,6,7,8],lint:0,login:35,method:4,miscellan:4,monotoniccoordinates1d:4,motiv:35,multidemension:4,nasa:35,node:[19,20,29,36,37],note:37,oper:4,orderedcompositor:18,organ:2,output:37,paper:38,param:36,pdf:2,pipelin:[30,37],podpac:[11,12,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,35,36,39],present:38,properti:4,purpos:11,quick:15,refer:[2,14,15,38],repositori:12,requir:[3,4,5,6,7,8],roadmap:13,runtim:35,sampl:37,save:35,scheme:13,set:[15,21,35],shorthand:4,smap:33,sourc:14,specif:[3,4,5,6,7,8],stack:4,stackedcoordin:4,style:[0,20],tag:36,test:[0,2],todo:13,trait:4,type:28,uniformcoordinates1d:4,unit:31,user:[3,5,6,7,8,12],util:[26,32],version:13,websit:2,why:39}})