Search.setIndex({docnames:["developer/contributing","developer/design","developer/docs","developer/specs/caching","developer/specs/coordinates","developer/specs/data-source","developer/specs/interpolation","developer/specs/nodes","developer/specs/pipelines","developer/specs/user_stories","examples","index","install","roadmap","user/api","user/api-min","user/api-min/podpac.core.authentication.EarthDataSession","user/api-min/podpac.core.compositor.Compositor","user/api-min/podpac.core.compositor.OrderedCompositor","user/api-min/podpac.core.node.Node","user/api-min/podpac.core.node.Style","user/api-min/podpac.settings","user/api/podpac.core.authentication","user/api/podpac.core.compositor","user/api/podpac.core.coordinate.coord","user/api/podpac.core.coordinate.coordinate","user/api/podpac.core.coordinate.util","user/api/podpac.core.data.data","user/api/podpac.core.data.interpolate","user/api/podpac.core.data.type","user/api/podpac.core.node","user/api/podpac.core.pipeline","user/api/podpac.core.units","user/api/podpac.core.utils","user/api/podpac.datalib.smap","user/coordinates","user/earthdata","user/nodes","user/pipelines","user/references","why-podpac"],envversion:53,filenames:["developer/contributing.md","developer/design.rst","developer/docs.md","developer/specs/caching.md","developer/specs/coordinates.md","developer/specs/data-source.md","developer/specs/interpolation.md","developer/specs/nodes.md","developer/specs/pipelines.md","developer/specs/user_stories.md","examples.md","index.rst","install.md","roadmap.md","user/api.rst","user/api-min.rst","user/api-min/podpac.core.authentication.EarthDataSession.rst","user/api-min/podpac.core.compositor.Compositor.rst","user/api-min/podpac.core.compositor.OrderedCompositor.rst","user/api-min/podpac.core.node.Node.rst","user/api-min/podpac.core.node.Style.rst","user/api-min/podpac.settings.rst","user/api/podpac.core.authentication.rst","user/api/podpac.core.compositor.rst","user/api/podpac.core.coordinate.coord.rst","user/api/podpac.core.coordinate.coordinate.rst","user/api/podpac.core.coordinate.util.rst","user/api/podpac.core.data.data.rst","user/api/podpac.core.data.interpolate.rst","user/api/podpac.core.data.type.rst","user/api/podpac.core.node.rst","user/api/podpac.core.pipeline.rst","user/api/podpac.core.units.rst","user/api/podpac.core.utils.rst","user/api/podpac.datalib.smap.rst","user/coordinates.md","user/earthdata.md","user/nodes.md","user/pipelines.md","user/references.md","why-podpac.md"],objects:{"podpac.core":{authentication:[22,0,0,"-"],compositor:[23,0,0,"-"],node:[30,0,0,"-"],pipeline:[31,0,0,"-"],units:[32,0,0,"-"],utils:[33,0,0,"-"]},"podpac.core.authentication":{EarthDataSession:[22,1,1,""],SessionWithHeaderRedirection:[22,1,1,""]},"podpac.core.authentication.EarthDataSession":{__init__:[16,2,1,""]},"podpac.core.authentication.SessionWithHeaderRedirection":{rebuild_auth:[22,2,1,""],update_login:[22,2,1,""]},"podpac.core.compositor":{Compositor:[23,1,1,""],OrderedCompositor:[23,1,1,""]},"podpac.core.compositor.Compositor":{__init__:[17,2,1,""],composite:[23,2,1,""],definition:[23,3,1,""],execute:[23,2,1,""],get_native_coordinates:[23,2,1,""],get_shared_coordinates:[23,2,1,""],get_source_coordinates:[23,2,1,""],iteroutputs:[23,2,1,""]},"podpac.core.compositor.OrderedCompositor":{__init__:[18,2,1,""],composite:[23,2,1,""]},"podpac.core.coordinate":{coord:[24,0,0,"-"],coordinate:[25,0,0,"-"],util:[26,0,0,"-"]},"podpac.core.coordinate.coord":{BaseCoord:[24,1,1,""],Coord:[24,1,1,""],MonotonicCoord:[24,1,1,""],UniformCoord:[24,1,1,""],coord_linspace:[24,4,1,""]},"podpac.core.coordinate.coord.BaseCoord":{add:[24,2,1,""],area_bounds:[24,3,1,""],bounds:[24,3,1,""],concat:[24,2,1,""],coordinates:[24,3,1,""],dtype:[24,3,1,""],intersect:[24,2,1,""],is_datetime:[24,3,1,""],is_descending:[24,3,1,""],is_monotonic:[24,3,1,""],kwargs:[24,3,1,""],rasterio_regularity:[24,3,1,""],scipy_regularity:[24,3,1,""],select:[24,2,1,""],size:[24,3,1,""]},"podpac.core.coordinate.coord.Coord":{is_datetime:[24,3,1,""],is_descending:[24,3,1,""],is_monotonic:[24,3,1,""],rasterio_regularity:[24,3,1,""],scipy_regularity:[24,3,1,""],size:[24,3,1,""]},"podpac.core.coordinate.coord.MonotonicCoord":{bounds:[24,3,1,""],is_descending:[24,3,1,""],is_monotonic:[24,3,1,""]},"podpac.core.coordinate.coord.UniformCoord":{bounds:[24,3,1,""],coords:[24,3,1,""],is_datetime:[24,3,1,""],is_descending:[24,3,1,""],is_monotonic:[24,3,1,""],rasterio_regularity:[24,3,1,""],scipy_regularity:[24,3,1,""],size:[24,3,1,""]},"podpac.core.coordinate.coordinate":{BaseCoordinate:[25,1,1,""],Coordinate:[25,1,1,""],CoordinateGroup:[25,1,1,""],convert_xarray_to_podpac:[25,4,1,""]},"podpac.core.coordinate.coordinate.Coordinate":{add_unique:[25,2,1,""],coords:[25,3,1,""],delta:[25,3,1,""],dims:[25,3,1,""],drop_dims:[25,2,1,""],gdal_crs:[25,3,1,""],get_dims_map:[25,2,1,""],get_shape:[25,2,1,""],intersect:[25,2,1,""],is_stacked:[25,3,1,""],iterchunks:[25,2,1,""],kwargs:[25,3,1,""],replace_coords:[25,2,1,""],shape:[25,3,1,""],stack:[25,2,1,""],stack_dict:[25,2,1,""],transpose:[25,2,1,""],unstack:[25,2,1,""],unstack_dict:[25,2,1,""]},"podpac.core.coordinate.coordinate.CoordinateGroup":{dims:[25,3,1,""],stack:[25,2,1,""],unstack:[25,2,1,""]},"podpac.core.coordinate.util":{add_coord:[26,4,1,""],get_timedelta:[26,4,1,""],get_timedelta_unit:[26,4,1,""],make_coord_delta:[26,4,1,""],make_coord_value:[26,4,1,""],make_timedelta_string:[26,4,1,""]},"podpac.core.data":{data:[27,0,0,"-"],interpolate:[28,0,0,"-"],type:[29,0,0,"-"]},"podpac.core.data.data":{DataSource:[27,1,1,""]},"podpac.core.data.data.DataSource":{definition:[27,3,1,""],execute:[27,2,1,""],get_data:[27,2,1,""],get_data_subset:[27,2,1,""],get_native_coordinates:[27,2,1,""],interpolate_irregular_grid:[27,2,1,""],interpolate_point_data:[27,2,1,""],rasterio_interpolation:[27,2,1,""]},"podpac.core.data.interpolate":{InterpolationException:[28,5,1,""],InterpolationPipeline:[28,1,1,""],Interpolator:[28,1,1,""],NearestNeighbor:[28,1,1,""],OptimalInterpolation:[28,1,1,""],Radial:[28,1,1,""],Rasterio:[28,1,1,""],ScipyGrid:[28,1,1,""],ScipyPoint:[28,1,1,""]},"podpac.core.data.interpolate.InterpolationPipeline":{kwargs:[28,3,1,""]},"podpac.core.data.interpolate.Interpolator":{source_coords_subset:[28,2,1,""],validate:[28,2,1,""]},"podpac.core.data.type":{NumpyArray:[29,1,1,""],PyDAP:[29,1,1,""],RasterioSource:[29,1,1,""],ReprojectedSource:[29,1,1,""],S3Source:[29,1,1,""],WCS:[29,1,1,""]},"podpac.core.data.type.NumpyArray":{get_data:[29,2,1,""]},"podpac.core.data.type.PyDAP":{get_data:[29,2,1,""],get_native_coordinates:[29,2,1,""],keys:[29,3,1,""]},"podpac.core.data.type.RasterioSource":{band_count:[29,3,1,""],band_descriptions:[29,3,1,""],band_keys:[29,3,1,""],close_dataset:[29,2,1,""],get_band_numbers:[29,2,1,""],get_data:[29,2,1,""],get_native_coordinates:[29,2,1,""]},"podpac.core.data.type.ReprojectedSource":{base_ref:[29,3,1,""],definition:[29,3,1,""],get_data:[29,2,1,""],get_native_coordinates:[29,2,1,""]},"podpac.core.data.type.S3Source":{get_data:[29,2,1,""],native_coordinates:[29,3,1,""]},"podpac.core.data.type.WCS":{base_ref:[29,3,1,""],get_capabilities_url:[29,3,1,""],get_data:[29,2,1,""],native_coordinates:[29,3,1,""]},"podpac.core.node":{Node:[30,1,1,""],NodeException:[30,5,1,""],Style:[30,1,1,""]},"podpac.core.node.Node":{__init__:[19,2,1,""],base_definition:[30,2,1,""],base_ref:[30,3,1,""],cache_dir:[30,3,1,""],cache_obj:[30,2,1,""],cache_path:[30,2,1,""],clear_disk_cache:[30,2,1,""],copy_output_array:[30,2,1,""],definition:[30,3,1,""],evaluated_hash:[30,3,1,""],execute:[30,2,1,""],get_hash:[30,2,1,""],get_image:[30,2,1,""],get_output_coords:[30,2,1,""],get_output_dims:[30,2,1,""],get_output_path:[30,2,1,""],get_output_shape:[30,2,1,""],get_params:[30,2,1,""],init:[30,2,1,""],initialize_array:[30,2,1,""],initialize_coord_array:[30,2,1,""],initialize_output_array:[30,2,1,""],latlon_bounds_str:[30,3,1,""],load:[30,2,1,""],load_cached_obj:[30,2,1,""],pipeline:[30,3,1,""],pipeline_definition:[30,3,1,""],pipeline_json:[30,3,1,""],shape:[30,3,1,""],write:[30,2,1,""]},"podpac.core.node.Style":{__init__:[20,2,1,""]},"podpac.core.pipeline":{AWSOutput:[31,1,1,""],FTPOutput:[31,1,1,""],FileOutput:[31,1,1,""],ImageOutput:[31,1,1,""],NoOutput:[31,1,1,""],Output:[31,1,1,""],Pipeline:[31,1,1,""],PipelineError:[31,5,1,""],PipelineNode:[31,1,1,""],make_pipeline_definition:[31,4,1,""]},"podpac.core.pipeline.FileOutput":{write:[31,2,1,""]},"podpac.core.pipeline.ImageOutput":{write:[31,2,1,""]},"podpac.core.pipeline.NoOutput":{write:[31,2,1,""]},"podpac.core.pipeline.Output":{write:[31,2,1,""]},"podpac.core.pipeline.Pipeline":{check_execution_graph:[31,2,1,""],check_params:[31,2,1,""],execute:[31,2,1,""],parse_node:[31,2,1,""],parse_output:[31,2,1,""]},"podpac.core.pipeline.PipelineNode":{execute:[31,2,1,""]},"podpac.core.units":{Units:[32,1,1,""],UnitsDataArray:[32,1,1,""],UnitsNode:[32,1,1,""]},"podpac.core.units.Units":{validate:[32,2,1,""]},"podpac.core.units.UnitsDataArray":{cumsum:[32,2,1,""],max:[32,2,1,""],mean:[32,2,1,""],min:[32,2,1,""],part_transpose:[32,2,1,""],set:[32,2,1,""],sum:[32,2,1,""],to:[32,2,1,""],to_base_units:[32,2,1,""]},"podpac.core.units.UnitsNode":{validate:[32,2,1,""]},"podpac.core.utils":{cached_property:[33,4,1,""],clear_cache:[33,4,1,""],common_doc:[33,4,1,""],get_settings_file:[33,4,1,""],load_setting:[33,4,1,""],save_setting:[33,4,1,""]},"podpac.datalib":{smap:[34,0,0,"-"]},"podpac.datalib.smap":{SMAP:[34,1,1,""],SMAPBestAvailable:[34,1,1,""],SMAPDateFolder:[34,1,1,""],SMAPPorosity:[34,1,1,""],SMAPProperties:[34,1,1,""],SMAPSource:[34,1,1,""],SMAPWilt:[34,1,1,""],np2smap_date:[34,4,1,""],smap2np_date:[34,4,1,""]},"podpac.datalib.smap.SMAP":{base_ref:[34,3,1,""],definition:[34,3,1,""],get_available_times_dates:[34,2,1,""],get_partial_native_coordinates_sources:[34,2,1,""],get_shared_coordinates:[34,2,1,""],get_source_coordinates:[34,2,1,""],keys:[34,3,1,""],source:[34,3,1,""]},"podpac.datalib.smap.SMAPDateFolder":{get_available_coords_sources:[34,2,1,""],get_shared_coordinates:[34,2,1,""],get_source_coordinates:[34,2,1,""],keys:[34,3,1,""],source:[34,3,1,""]},"podpac.datalib.smap.SMAPProperties":{get_native_coordinates:[34,2,1,""]},"podpac.datalib.smap.SMAPSource":{get_available_times:[34,2,1,""],get_data:[34,2,1,""],get_native_coordinates:[34,2,1,""],latkey:[34,3,1,""],lonkey:[34,3,1,""],product:[34,3,1,""]},podpac:{settings:[21,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception"},terms:{"3rd":0,"5th":4,"boolean":[4,17,23,25,27,29,38],"break":13,"byte":3,"case":[0,13,17,23,27,32],"class":[0,1,4,15,16,17,18,19,20,22,23,24,25,27,28,29,30,31,32,34,36,37,38],"default":[0,4,5,13,17,19,23,24,25,27,29,30,31,37,38],"enum":[4,5],"final":[9,19,30],"float":[4,19,24,25,26,30],"function":[0,1,5,13,15,19,24,25,26,28,30,31,33,34],"import":[0,10,36,38],"int":[0,4,5,17,23,25,29],"long":[0,17,23],"new":[0,4,5,12,17,23,24,25,26,27,37],"return":[0,4,5,17,18,19,22,23,24,25,26,27,28,29,30,31,32,33,34],"static":2,"true":[5,17,19,23,24,25,27,30,37,38],"try":[0,5,12],"var":0,"while":[0,3],AWS:[1,3,11,13],Adding:0,And:[0,2],CRS:4,For:[0,4,12,13,17,19,23,24,25,30,32,36,37,38],GIS:0,IDE:0,Not:[10,19,24,30,38],One:[17,23],The:[0,1,2,3,4,5,10,11,12,13,17,19,23,24,25,26,27,29,30,37,38],Then:[2,36],There:0,These:[0,5,12],Use:11,Uses:[19,29,30],Using:[3,36],WCS:[5,10,29],With:22,__doc__:33,__init__:[16,17,18,19,20],_alat:4,_ca:4,_cl:4,_cm:4,_cu:4,_determine_source_coordin:5,_interpol:5,_interpolate_coordin:5,_intersect_coordin:5,_post_get_data:5,_pre_get_data:5,_sl:4,_static:2,_templat:2,_ualt:4,_ulat:4,_ulon:4,_utim:4,a1d:4,abil:3,abl:[3,37],about:0,abov:[0,3,4],accept:0,access:[0,1,3,5,10,11,13,22,29,36],accomplish:3,account:10,accur:[17,20,23],across:3,activ:12,actual:[0,4,17,23,29],adapt:0,add:[0,2,3,4,5,6,7,8,9,13,24,26],add_coord:26,add_dim:4,add_uniqu:25,added:26,adding:[3,26],addit:[0,3,4,19,25,30,36,37],address:22,adher:0,advic:5,affect:5,affin:29,after:[3,5,12,17,19,23,29,30],again:37,against:29,alat:4,alglib:1,algorithm:[0,1,10,11,19,30],alia:5,alias:4,align:4,all:[0,2,4,5,10,12,15,17,19,23,24,25,27,29,30,38],all_cach:[19,30],alloc:[17,19,23,27,30],allow:[4,5,13,17,23],allow_non:[32,37],along:[24,25,27],alreadi:0,also:[0,4,5,17,19,23,26,29,30,37,38],alt:[4,29],altern:5,alwai:3,amongst:[17,23],ams2018:39,anaconda:12,analysi:[3,11],ani:[0,5,17,19,23,25,27,29,30],anonym:0,anoth:[4,29],api:[2,11],app:36,appear:[18,23],append:13,applic:36,appropri:5,approv:36,arbitrari:[4,5],architectur:11,archiv:36,area:[4,29],area_bound:[4,24],arg:[20,24,25,28,30,31,32],argument:[19,29,30],arithmet:38,arr:[19,30],arrai:[0,3,4,5,17,19,23,24,25,26,27,29,30,32],array_lik:0,artifact:0,ascend:24,assign:[19,30],assum:[0,12],attent:[27,29],attr:[19,30,32,33,37,38],attribut:[13,16,17,18,19,20,22,23,25,27,30,31],auth:22,auth_class:[29,34],auth_host:[16,22],auth_sess:[29,34,36],authent:[29,36],author:36,auto:[0,2,5],autobuild:2,autodoc:2,autodoc_default_flag:14,autodocstr:0,autogen:[2,14],autogener:[14,15],autom:13,automat:[2,5,13,14,17,19,23,29,30,36,38],avail:[3,29],available_interpol:28,averag:[5,29],avoid:0,awar:[17,18,19,23,27,30],aws:[17,19,23,27,30,38],awsoutput:31,back:[0,3],backblaz:5,backward:[13,24],badexcept:0,balanc:3,band:29,band_count:29,band_descript:29,band_kei:29,base64:[19,30],base:[1,4,5,17,18,19,23,24,25,26,27,29,30],base_definit:[19,30],base_defit:[19,30],base_ref:[19,29,30,34],base_url:34,basecoord:24,basecoordin:25,basic:[3,5,24,28,38],bass:3,becaus:[0,10,17,23,24,26,29],becom:3,been:[19,30],befor:[5,38],behav:[4,13],behavior:38,being:[19,29,30],below:14,benefit:0,best:[27,29],better:3,between:[24,25],beyond:24,bilinear:[5,38],bilinearli:29,binari:3,bleed:12,bool:[17,19,21,23,24,27,30,38],both:0,bottleneck:3,bottom:36,bound:[4,19,24,25,30],box:[4,24],bracket:0,branch:[0,12],browser:2,bucket:[3,5,29,31],bug:0,button:36,cach:[2,3,13,17,19,23,30],cache_dir:[19,30],cache_native_coordin:[17,23,34],cache_obj:[19,30],cache_path:[19,30],cache_to_s3:21,cache_typ:[19,30],cached_properti:33,calcul:[3,4,5,17,23,24],call:[5,26,27,29],can:[0,3,4,5,10,11,17,19,23,26,27,28,29,30,36,37,38],cannot:[19,26,28,29,30,37],capabl:29,captur:1,cast:[4,24,26],central:3,certain:4,certiain:4,cfg:0,chang:[0,2,3,17,23,33],channel:12,charact:26,check:[0,4],check_dim_repeat:25,check_execution_graph:31,check_param:31,checkout:[0,12],cherri:15,child:[5,27,29,36],children:[17,19,23,27,30],choic:0,choos:[4,27,29],chunk:25,cite:0,clear:[19,30],clear_cach:33,clear_disk_cach:[19,30],click:36,clim:[20,30],close:29,close_dataset:29,cloud:[1,11,19,30],cluster:3,cmap:[20,30],code:[2,12,19,30,36],coeffici:[19,30],collabor:11,colormap:[19,30,38],com:[12,22],combin:[4,11,18,23],command:0,comment:0,common:[4,17,19,23,26,30],common_doc:33,common_parameters_listed_abov:0,commond:33,commun:[0,13],compat:[0,13,24,27,29],complet:[17,23],complex:[0,3],complic:5,complient:29,composit:[11,17,18,23,38],compositor:[19,30],comput:[0,3,11,12],concat:[4,24],concaten:[4,24,25],concern:29,conda:2,conf:2,config:[14,32],configur:[0,2],consid:4,construct:[17,23,29],contain:[1,4,17,18,19,23,27,29,30,38],contribut:[11,13],control:[0,19,30],contruct:5,contructor:5,conveni:36,convert:[0,2,24,25,26],convert_xarray_to_podpac:25,convienc:2,convolut:13,coodin:4,coord:[4,10,19,25,30,32,37],coord_linspac:24,coord_ref_si:[4,24,25],coordin:[5,9,10,11,13,17,19,23,27,28,29,30,31,34],coordinate1d:4,coordinategroup:25,coordinates_index:[5,27,29,34],coordinates_sourc:29,coordint:4,coords_copi:4,coords_dst:27,coords_src:27,copi:[2,4,19,25,30],copy_output_arrai:[19,30],core:[0,1,12,36,37],correct:[0,17,19,23,25,26,27,30],correspond:25,cost:3,cost_func:28,cost_setup:28,cost_tol:28,could:[0,3,5,15,17,23],cov:0,coverag:13,coveral:0,crear:12,creat:[0,4,5,10,12,19,29,30],creation:13,creep:0,criteria:29,crs:29,ctype:[4,24,25],cubic:5,cumsum:32,current:[17,19,23,27,30,38],custom:[0,13,24,38],dai:[17,23,26],dalta:26,dap:29,dask:13,data:[1,3,4,5,9,10,11,13,17,19,22,23,30,32,37],data_dst:27,data_src:27,data_subset:5,dataarrai:[4,17,18,19,23,25,27,30,32],dataarraycoordin:25,databas:3,datakei:29,datalib:[1,10,38],dataset:[5,17,23,29,36,38],datasettyp:29,datasourc:[0,3,13,17,19,23,27,29,30],datasubset:27,datatyp:[12,19,30],date:[9,17,23,26,34],date_file_url_r:34,date_time_file_url_r:34,date_time_url_r:34,date_url_r:34,datetim:[3,24,26],datetime64:[4,24,26],debug:3,decid:0,decor:33,decreas:24,def:[0,5],default_valu:[32,37],defin:[3,4,5,17,19,23,24,27,29,30,37,38],definit:[5,13,17,19,23,27,29,30,31,34,37],definition_return:[19,30],defint:[17,23,27],delet:[3,19,30],delta:[4,24,25,26],demo:9,demonstr:1,depend:[4,5,12,27,29],deploy:1,deprec:[19,25,30],deriv:[17,19,23,27,29,30],descend:24,describ:[0,4,17,23,27,29,38],descrip:[19,30],descript:[0,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],design:[11,37],desir:[17,19,23,30],destin:[28,38],detail:[0,4,27,29,36],detect:2,determin:[5,17,19,23,29,30],deval:12,develop:[0,10,11,13,17,23,27],dict:[4,17,19,23,25,27,29,30,31,33],dictioari:[19,30],dictionari:[3,4,5,17,19,23,24,25,27,30,33,38],differ:[3,4,17,23,26,29],dim:[4,5,19,25,30,32],dimens:[13,17,19,23,24,25,27,29,30],dimension:26,dims_map:25,direct:[4,14],directli:[27,29],directori:[0,1,2,19,30],disciplin:0,discrib:[19,30],disk:[3,19,29,30],displai:[19,22,30],dist:1,distance_unit:4,distribut:[2,3,12],divid:24,divisor:26,dlat:4,dlon:4,doc:[1,2],doc_dict:33,docstr:[2,33],doctest:[0,2,25],doctr:[13,33],document:[0,1,11,13,14,15],doe:[0,4,17,23],doesn:[5,19,29,30],doing:29,domain:[0,1],don:5,done:0,down:[17,23],download:29,downsampl:4,downscaled_sm:38,drop:4,drop_dim:[4,25],dtype:[4,19,24,30],due:4,duplic:25,dure:[2,13],each:[2,4,13,17,23,24,25,36,37,38],earth:[10,11],earthdata:[22,29],earthdatasess:[22,36],eas:4,easier:[0,15],edg:12,editor:0,eds:36,effici:[17,23,27,28,29],either:[0,4,29,36],element:4,els:24,empti:[4,19,24,30],enabl:[13,36],encod:[19,30,32],encount:12,encourag:0,end:[4,13,24],endpoint:[13,29],enter:[2,36],entir:[17,19,23,30],entri:2,enumeration_color:[20,30],enumeration_legend:[20,30],environ:1,environment:0,epsg:[24,29],eqn:38,equal:29,equat:[19,30],equival:[4,38],error:[19,29,30],especi:[17,23],essenti:1,etc:[0,2,4,17,19,23,27,30,31],eval_coord:28,evalu:[13,17,19,23,29,30,38],evaluated_coordin:[19,30],evaluated_hash:[19,30],even:[0,4],everi:[4,17,23,36],everyth:[13,17,19,23,30],exactli:5,exampl:[0,1,11,17,19,22,23,26,27,30,36,38],exce:26,except:[4,19,28,29,30,31],execut:[3,5,10,13,17,18,19,23,27,29,30,31,37,38],execute_param:[19,30],exist:[4,5,12,19,30],expand:13,expect:[19,30],experi:12,expert:0,expir:[3,13],explan:0,explicit:4,explicitli:[4,38],extend:[0,5,19,30],extent:[4,24],extract:26,extrapol:28,facilit:[4,11],fact:3,fail:5,fairli:0,fall:3,fals:[17,19,23,24,25,30,31,32,37,38],faster:[17,23],fastpath:32,featur:0,feed:29,feet:4,fetch:29,few:[5,17,23,27],fewer:24,field:33,fifthfunc:0,figur:3,file:[0,2,3,5,16,19,26,29,30,31,36],file_handl:29,file_url_r:34,file_url_re2:34,filenam:[19,30],fileoutput:31,filepath:[5,27],filesystem:3,fill:[4,17,23],fillval:[5,19,30],find:[29,36],first:[0,17,23],fit:29,fix:13,fixed_ord:28,flag:[17,19,23,30],flat:5,flatten:31,float64:4,focu:[11,32],folder:[17,23],folder_d:34,follow:[0,1,2,4,10,13,36],folow:4,forecast:3,forg:12,fork:0,form:26,format:[0,2,5,13,19,30,31,33,38],found:10,fourthfunc:0,free:4,frequenc:3,from:[0,2,3,4,5,12,16,19,22,25,26,27,28,29,30,36,38],ftpoutput:31,full:[14,19,24,30,38],func:33,futur:[3,19,30],fuzzi:0,gauss:5,gdal:25,gdal_cr:25,gener:[0,1,2,4,10,13,18,23,27,29,32],geodet:4,geodic:29,geoscienc:0,geoserv:5,geospati:[3,11,13],geotif:38,geotiff:[3,5,29],gesdic:36,get:[0,4,5,9,11,17,19,22,23,24,26,27,29,30],get_available_coords_sourc:34,get_available_tim:34,get_available_times_d:34,get_band_numb:29,get_capabilities_url:29,get_data:[5,27,29,34],get_data_subset:27,get_descript:[19,30],get_dim:4,get_dims_map:25,get_hash:[19,30],get_imag:[19,30],get_native_coordin:[5,17,23,27,29,34],get_output_coord:[19,30],get_output_dim:[19,30],get_output_path:[19,30],get_output_shap:[19,30],get_param:[19,30],get_partial_native_coordinates_sourc:34,get_settings_fil:33,get_shap:25,get_shared_coordin:[17,23,34],get_source_coordin:[17,23,34],get_timedelta:26,get_timedelta_unit:26,git:[0,12,13],github:[0,11,12],give:[4,18,23,27,29],given:[4,5,19,24,25,30],going:0,gov:22,greek:0,grid:[4,27],group:[0,13],groupcoordin:[17,23],guarante:[13,24],guarente:5,guid:11,habitat:0,haggi:0,handl:[3,13,26,32,37],hard:[3,17,23],has:[17,19,23,29,30],hash:[3,13,19,30],hash_return:[19,30],have:[0,4,17,19,23,26,27,29,30,32,36],hdd:3,hdf:3,head:13,header:[22,29],help:[0,13,19,20,30,32],helper:[19,30],here:0,high:[13,24],highland:0,hold:[17,23],home:36,host:22,hotfix:13,hour:[17,23],how:[0,2,4,13,17,19,22,23,26,27,30],howev:3,html:[0,1,2],http:[2,12,22],ideal:3,idempot:3,identifi:13,ignor:[4,19,30],illustr:0,imag:[1,2,19,30,31],imageoutput:31,implement:[0,1,4,5,13,17,19,23,24,27,28,29,30,38],implicit_pipeline_evalu:[19,30,31],implicitli:[4,38],improv:13,in_plac:25,includ:[0,1,2,3,4,5,12,13,17,19,23,24,30,31,37,38],incompat:26,incomplet:[13,17,23],incorpor:0,incorrect:13,increas:[13,24],ind:[24,25],index:[2,4,5,17,23,24,27,29],indic:[17,19,23,24,25,27,29,30],individu:4,info_text:32,inform:[17,23],inherit:[27,29],init:[19,30],init_typ:[19,30],initi:[19,20,30],initialize_arrai:[19,30],initialize_coord_arrai:[5,19,27,29,30],initialize_output_arrai:[19,30],inlin:0,inplac:24,input:[2,3,4,5,13,17,19,23,24,26,27,29,30,31,38],instal:[1,11,29],instanc:[19,29,30],instanti:[29,37],instead:[5,12,24,25,29],instruct:[1,12,36],integ:[26,37],integr:13,intent:12,interact:[3,36],interest:36,interfac:[0,4,13,17,19,23,30],intermedi:3,intern:10,interpol:[4,5,11,13,17,19,23,27,29,30,38],interpolate_irregular_grid:27,interpolate_point_data:27,interpolation_param:[5,27],interpolationexcept:28,interpolationpipelin:28,interpret:[2,5,26,27,29],intersect:[4,24,25,27],interv:3,invalid_dim:28,invoc:13,involv:3,irregularli:4,is_datetim:[4,24],is_descend:[4,24],is_enumer:[20,30],is_monoton:[4,24],is_source_coordinates_complet:[17,23],is_stack:25,issu:[0,12,13,36],item:25,iter:4,iterchunk:25,iteroutput:[17,23],its:[4,5,17,19,23,25,27,30,38],join:4,jointli:[19,30],json:[19,30,36,38],jupyt:[1,10],just:[5,17,23],kappa:38,keep:22,kei:[3,4,16,29,33,34],keyerror:4,keyword:[19,29,30],kind:[3,5],know:3,known:13,krige:[0,28],kwarg:[5,17,18,19,20,23,24,25,27,28,29,30,31,32,34],l1d:4,label:4,lambda:[3,13],lanczo:5,larger:29,last:[19,26,30],lat:[4,5,9,10,25,29],lat_lon:[4,25],late:2,later:[37,38],latex:2,latitud:[19,30],latkei:34,latlon_bounds_str:[19,30],latlon_delta:34,latlon_url_r:34,layer:29,layer_nam:29,layer_styl:[19,30],layerkei:34,least:3,left:29,len:4,let:12,level:[17,23,38],librari:[0,1,10,22],light:[19,30],like:[0,3,4,28,32],likewis:32,limit:[1,3,15,17,23],line:[0,4,26],linspac:4,linux:[12,36],list:[0,4,5,17,19,23,24,25,27,28,29,30,31,34,38],literatur:0,littl:29,live:2,load:[3,5,16,19,29,30],load_cached_obj:[19,30],load_set:33,local:[3,5,17,19,23,27,30],locat:[3,5,17,19,23,27,30,38],log:36,logic:0,login:29,lon:[4,5,9,10,29],long_var_nam:0,longitud:[19,30],lonkei:34,look:0,lookup:3,low:[17,23,24],m1d:4,mac:[2,12],machin:12,mactex:2,mai:[0,1,4,5,12,17,19,23,24,27,29,30,36,37],main_nod:31,major:13,make:[0,2,3,4,15,17,23,25,26,31],make_coord_delta:26,make_coord_valu:26,make_pipeline_definit:31,make_timedelta_str:26,mani:[0,17,23],manner:28,mantain:22,manual:2,map:[4,25],mark:0,markdown:2,marker:0,mask:32,master:12,match:[27,29],math:0,matur:0,max:[5,13,24,32,38],maximum:[19,30],mayb:3,mcnoleg:0,mean:[0,32],mechan:[13,19,29,30],med:5,medium:3,member:[14,15],memori:[17,19,23,27,30,38],metadata:[26,29],meth:[27,29],method:[0,5,15,16,17,18,19,20,23,27,29,30,36],miktex:2,min:[2,5,24,32,38],minim:2,minimum:[19,30],minor:13,minut:[17,23],mismatch:4,miss:0,mock:5,mockdatasourc:5,mode:[5,12,38],model:[0,29],modif:0,modifi:[0,4,13,17,19,22,23,27,30],modul:[0,5,14,26,32,38],moment:12,mongodb:3,monitor:0,monoton:[13,24],monotoniccoord:24,month:[17,23,26],more:[0,2,3,4,5,17,18,23,24,27,29,36,38],most:[0,26,27,28,29],move:[4,13],much:[17,23],multi:[17,23],multidimension:25,multiindex:4,multipl:[0,3,4,17,23,29],must:[5,17,23,24,26,27,29,38],my_attr:37,my_new_featur:0,my_param1:37,my_param2:37,mycompositor:38,mycustomnod:38,mydatasourc:37,mymodul:38,mynod:38,mynode1:38,mynode2:38,myothernod:38,myplugin:38,mythirdnod:38,n_thread:[17,23],nad87:4,name:[0,4,5,17,19,20,23,27,29,30,31,32,38],nan:[5,18,19,23,27,29,30],nan_val:5,nanval:5,nasa:[3,5,10,11,17,22,23],nativ:[4,5,9,17,19,23,29,30],native_coordin:[5,17,19,23,27,29,30,31],ndarrai:[0,17,19,23,24,29,30,32],ndim:4,nearest:5,nearestneighbor:28,necessari:5,need:[0,2,3,4,5,17,19,23,27,28,29,30,36,37],nest:0,network:[0,3,29],neural:0,new_crd:25,new_dim:32,newfunc:0,next:[24,25],nice:24,no_data_v:[27,34],no_styl:[19,30],nodata:5,node:[0,1,5,10,11,13,17,18,23,27,29,31,36],node_cach:[19,30],node_class:29,node_default:[19,30],node_kwarg:29,nodeexcept:[19,30],nomin:26,non:[5,17,23,24,27,29,38],none:[4,5,13,16,17,18,19,20,22,23,24,25,27,28,29,30,31,32,33],none_v:5,nonev:5,nonlinear:26,nooutput:31,note:[0,4,10,17,19,23,24,26,27,29,30,36],notebook:[1,10],notimplementederror:[5,17,19,23,24,27,28,29,30,31],now:[0,32],np2smap_dat:34,nsidc:36,nsidc_datapool_op:36,num:24,number:[0,3,19,24,25,26,29,30,38],numer:[4,24],numpi:[0,3,5,17,19,23,26,27,29,30],numpyarrai:29,obj:[19,30,32],object:[0,4,13,19,24,25,27,29,30,38],observ:11,obtain:27,ogc:29,omega:0,omit:38,onc:[17,18,23,36],one:[0,2,3,4,5,17,23,25,38],ones:[19,30],onli:[0,4,12,17,19,23,27,30],only_seldom_used_keyword:0,onto:[12,28],open:29,opendap:[29,36],opendap_url:36,oper:5,oppos:[4,17,23],optim:[17,23,28],optimalinterpol:28,option:[0,2,4,5,14,15,16,17,18,19,22,23,24,25,27,28,29,30,31,32,33,37,38],order:[5,18,23,24,25,27,29],orderedcompositor:[23,38],ordereddct:[19,30],ordereddict:[4,17,19,23,25,27,29,30],orient:0,origin:12,other:[0,2,3,4,5,12,13,24,25,38],other_coord:25,otherfunc:0,otherwis:[5,17,19,23,24,30],our:[0,36],out:[0,3],out_dir:[19,30],outdir:[19,30,31,38],outlin:2,output:[0,5,13,17,18,19,23,27,30,31,37],output_nod:31,outputdata:38,over:[2,3,4,9,17,23,29],overload:29,overrid:[4,15,22],overwrit:[4,17,18,19,28,30],own:[5,17,19,23,27,30,37],packag:[0,2,12],pad:[25,28],page:[1,2,36],pai:[27,29],panda:4,paragraph:0,parallel:[13,17,19,23,27,30],param:[5,13,17,19,23,27,30,31,38],paramet:[0,3,16,17,18,19,22,23,24,25,26,27,28,29,30,31,32,33,34,37,38],paramt:3,pars:[4,24],parse_nod:31,parse_output:31,part:[4,17,19,23,30,36],part_transpos:32,parti:0,particular:[1,3,9,13,32,37],pass:[0,4,17,19,23,29,30,37],password:[16,22,29,34,36],path:[12,19,29,30,31,33,38],pattern:3,pdflatex:2,pep8:0,perform:3,perman:[19,30],physic:4,pick:[5,15],pickl:[19,30,38],pint:[19,30],pip:[2,12],pipelin:[3,5,10,11,13,17,19,23,27,29,30,37],pipeline_definit:[19,30],pipeline_json:[19,30,31],pipelineerror:31,pipelinenod:31,place:[4,13,24,25],plain:[22,29,36],plan:[19,30],platform:12,plot:[19,30],plugin:[0,17,23,27,38],png:[19,30,38],podpac:[0,1,2,3,5,10,13,38,39],podpact:25,point:[0,4,13,17,23,24,25],pointer:29,portion:[3,24],possibl:[3,4,10,32],potentailli:5,potenti:[5,13],potential:25,pre:[17,23],predict:3,prefix:[19,30],prepared_request:22,prepend:38,present:[0,19,29,30],preserv:4,press:2,preview:5,primari:[19,30],print:0,priorit:[3,13],prioriti:13,privat:5,procedur:12,process:[0,3,5,11,13,37],produc:38,product:[10,11,34,38],profil:36,project:[0,11],promot:13,prompt:36,properli:0,properti:[5,19,24,25,30,34],protocol:3,provid:[0,5,27,29,36,38],pull:0,purpos:3,pydap:[29,36],pydap_nod:36,pylint:0,pylintrc:0,pytest:0,python:[0,1,2,4,12,22,36],quantiz:24,queri:3,quick:[5,11],quickli:5,radial:28,rais:[0,4,5,17,19,23,24,25,26,27,28,29,30,31,34],ram:[3,19,29,30],rand:5,random:5,rasterio:[12,28,29],rasterio_interpol:27,rasterio_regular:[4,24],rasteriosourc:29,read:[2,4],read_onli:32,readi:36,rebuild:2,rebuild_auth:22,rebuilt:2,recenc:3,recent:26,recommend:[4,12],recommonmark:2,record:[0,13],redirect:[22,29],redon:3,refactor:13,refer:[0,4,11,19,24,25,29,30],referenc:[13,38],region:9,regist:36,registr:36,registri:[19,30],regularli:4,reject:0,rel:[17,23,38],relationship:0,releas:13,relev:0,reload:2,remain:13,remot:0,remov:[4,5,25],renam:5,reorder:25,repeat:[27,29],replac:[4,17,23,25,33,38],replace_coord:25,report:0,repositori:0,repres:[3,4],reproduc:3,reproject:13,reprojected_coordin:29,reprojectedsourc:29,request:[0,3,4,5,13,17,18,19,22,23,27,29,30],requested_coordin:5,requested_source_coordin:5,requested_source_coordinates_index:5,requir:[10,17,23,27,29,36,38],reserv:3,resid:29,resolut:[4,29],resourc:3,respect:[3,24],respond:3,respons:22,result:[3,4,17,18,23,24,26,27],rethink:13,retreiv:[19,30],retriev:[3,10,19,27,29,30,36],return_slic:25,return_typ:29,revers:25,review:0,rewritten:4,roadmap:[0,11],root:[0,2,19,30],root_path:21,rootdatakei:34,rotat:4,rst:2,rtd:2,rule:[17,23],run:[0,2,3,19,30,36],runtim:[17,19,23,27,30],runtimeerror:34,s3_bucket:29,s3_bucket_nam:[21,29],s3_data:29,s3sourc:29,safe:4,same:[3,17,23,24],save_set:33,scheme:4,scienc:11,scientif:1,scientist:11,scipy_regular:[4,24],scipygrid:28,scipypoint:28,screen:36,script:[2,36],scroll:36,seamless:11,second:[17,23],section:[0,2,13],secur:[29,36],see:[0,2,5,10,19,20,24,27,29,30,38],seem:[17,23],segment:[4,24,25],segment_posit:[4,24,25],select:[4,24],self:[0,4,5,16,18,19,20,23,29,30,33],sens:0,sentenc:0,seper:0,serial:[3,17,19,23,27,29,30],serv:[2,3,5,19,30],server:[2,3,5,17,23,29],serverless:3,servic:[19,29,30],session:[22,29,36],sessionwithheaderredirect:[22,29],set:[0,3,4,5,16,17,19,23,25,26,27,29,30,32,37,38],setup:0,sever:[0,38],shape:[4,13,19,25,30,31],shard:3,share:[11,17,19,23,30],shared_coordin:[17,23],shell:3,shortcut:5,should:[0,3,4,5,11,13,19,27,28,29,30,36,37,38],shouldn:0,sign:24,signatur:20,silent:13,simpl:5,simpler:12,simpli:2,simultan:[17,23],singl:[0,4,17,23,24,25,27,29,32],singleton:26,size:[3,4,13,19,24,30],skip:25,skip_evalu:31,slice:[4,24,25,27,29],slightli:15,slower:[17,23],small:[0,17,23],smap2np_dat:34,smap:[1,3,9,10,38],smap_base_url:34,smap_incomplete_source_coordin:34,smap_product_map:[10,34],smap_product_opt:10,smapbestavail:34,smapdatefold:34,smapporos:34,smapproperti:34,smapsourc:34,smapwilt:34,softwar:0,some:[0,3,4,5,12,19,29,30],somewhat:12,sort:[4,24],sourc:[1,2,5,10,11,12,16,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33,34,36,37,38],source_coord:28,source_coordin:[5,17,23],source_coords_subset:28,source_interpol:29,source_pipelin:31,sourcea:38,sourceb:38,sourcec:38,space:[4,24],spec:[3,5,6,7,8],special:28,specif:[0,1,13,15,19,24,30],specifi:[0,3,4,13,15,19,24,25,29,30],sphinx:[1,2,14],sphinx_rtd_them:2,spl4smau:38,spline:5,split:4,ssd:3,stabl:12,stack:[25,27,29],stack_dict:25,stack_dim:25,stacked_coord:25,stacked_linspac:4,stage:36,standard:[19,30],start:[4,11,24],startpoint:13,statu:0,stdin:26,step:4,stop:[2,4,17,23,24],storag:3,store:[3,5,17,19,23,27,29,30,36],stori:9,str:[4,16,17,19,22,23,24,25,26,27,29,30,32,34],strict:0,stride:[27,29],string:[4,19,22,26,29,30,38],structur:1,stub:35,style:[2,19,30],sub:[4,13],subclass:[5,19,24,30,37],subject:3,sublim:0,submodul:38,subselect:[17,23],subset:[5,11,17,23,27,28,29],subtract:4,sum:[26,32],summari:[0,16,17,20,21,22,23,24,25,27,28,29,30,31,32,33,34],suppli:[5,17,19,23,27,29,30],support:[2,3,4,13,17,19,23,27,30,38],supported_dim:28,suppos:28,sure:4,symbol:0,system:[0,3,4,24,25,27,29,36],t18:4,tabular:5,tag:[13,17,23,27],take:[5,17,23],target:13,tbd:[12,39],techniqu:0,technolog:3,templat:[2,27,29],test:[5,13],test_funct:0,test_method:0,testclass:0,tex:2,text:[0,22,29,36],than:[3,12,17,23,24],thei:[5,13,18,23,26,38],theme:2,thi:[0,1,3,4,5,12,13,15,17,18,19,23,24,25,26,27,28,29,30,36,37,38],thirdfunc:0,those:0,thread:[17,23],three:38,through:[13,36],tick:0,tier:3,tight:0,tighter:13,time:[2,3,4,10,17,23,24,26,29,36],timedelta64:[4,24,26],timedelta:[4,26],to_base_unit:32,toc:2,toctre:14,todo:[3,4,5,6,7,8,9,24,25,31,37],togeth:[4,17,18,23],tol:24,toler:[27,28],tolist:10,top:38,total:[3,4],traceback:26,track:0,trait:5,traitlet:[13,32,37],transfer:32,transform:29,translat:5,translate_requested_coordin:5,transport:[19,30],transpos:[13,25],tri:29,tricki:[17,23,29],troubleshoot:29,tsmtr:38,tupl:[4,19,22,25,30],two:[3,4,28],type:[0,4,5,17,19,20,21,22,23,24,25,26,27,28,30,31,32,33,34,36,38],type_without_descript:0,typeerror:[24,25,26],u1d:4,ualt:4,ulat:4,ulon:4,ultim:0,undefin:32,under:[3,13,36],underneath:0,underscor:4,understand:[19,30],unicod:[4,24,25],uniform:4,uniformcoord:24,uniformcoordin:13,uniformli:[4,24],uniqu:[17,23,24,37],unit:[0,4,13,17,18,19,20,23,24,26,27,30],unitdataarrai:[17,18,23],unitsdataarrai:[3,5,13,17,18,19,23,27,29,30,32],unitsnod:32,unless:[27,38],unlik:37,unord:25,unstack:[4,25],unstack_dict:25,unsupport:[19,30],until:[0,18,23],unus:[24,25],updat:[3,13,17,19,23,24,30],update_login:[22,36],ureg:[19,30,32],url:[29,31],usag:13,use:[0,2,3,4,5,10,13,15,19,24,29,30,36,38],usecas:[3,6,7,8,17,23],used:[0,1,3,4,13,16,17,19,23,27,29,30,33,38],useful:38,user:[0,2,9,11,17,19,23,27,29,30,31,36],usernam:[16,22,29,34,36],uses:[0,3,19,30],using:[0,2,3,4,5,10,12,14,16,17,19,23,27,29,30,32,36,38,39],usual:[27,29,36],utim:4,utm:4,val:26,valid:[28,32],valid_dim:28,valid_interpol:28,valu:[0,3,4,5,17,18,19,23,24,26,27,29,30,32,33,37,38],valueerror:[19,25,27,30],var1:0,var2:0,variabl:[0,29],variant:[19,30],varieti:38,variou:1,version:[4,29],via:[3,5,27,29],view:11,visit:2,visual:0,vmax:[19,30,31,38],vmin:[19,30,31,38],vol:0,wai:[0,4],want:[4,5,9,17,23,28,32],warn:[19,29,30],wcs_coordin:29,wcs_default_cr:29,wcs_default_vers:29,wealth:36,weather:3,webpag:2,weight:[19,30],welcom:0,well:[17,23,27],were:[17,19,23,27,30],wgs84:[4,25,29],what:3,when:[0,3,4,5,13,17,19,22,23,26,27,29,30,37,38],where:[0,1,4,13,19,24,25,26,29,30,32,36],which:[0,4,5,17,19,23,24,26,27,29,30],whole:[0,24,25],why:11,wider:0,wiki:22,wildli:[17,23],window:[2,4,12,36],wish:4,within:[4,24,25],work:[0,4,10,12],workflow:10,wors:3,would:[4,5],wrang:11,wrangl:29,wrap:[0,31],write:[0,19,30,31,37],written:0,xarrai:[3,4,17,18,19,23,25,27,30,32],xcoord:25,year:[9,17,23,26],yet:[24,38],yield:[17,23,25],you:[0,2,5,12,17,23,24,29,36,37],your:[0,12,36,37],zero:[19,24,30],zone:4},titles:["Contributing","Design","Documentation","Requirements","Requirements","Requirements","Requirements","Requirements","Requirements","&lt;no title&gt;","Examples","PODPAC","Install","Roadmap","API Reference","API Quick Reference","podpac.core.authentication.EarthDataSession","podpac.core.compositor.Compositor","podpac.core.compositor.OrderedCompositor","podpac.core.node.Node","podpac.core.node.Style","podpac.settings","podpac.core.authentication","podpac.core.compositor","podpac.core.coordinate.coord","podpac.core.coordinate.coordinate","podpac.core.coordinate.util","podpac.core.data.data","podpac.core.data.interpolate","podpac.core.data.type","podpac.core.node","podpac.core.pipeline","podpac.core.units","podpac.core.utils","podpac.datalib.smap","Coordinates","NASA Earth Data","Nodes","Pipelines","References","Why PODPAC"],titleterms:{"case":[3,4,5,6,7,8],"class":5,"function":4,AWS:38,One:4,Use:[3,4,5,6,7,8],account:36,algorithm:[37,38],api:[14,15],arraycoordinates1d:4,attribut:[21,24,28,29,32,34,37,38],authent:[15,16,22],basecoordinates1d:4,bug:13,build:2,clone:12,code:0,common:38,compositor:[17,18,23,37,38],conda:12,contribut:0,coord:24,coordin:[4,14,24,25,26,35],coordinates1d:4,core:[14,15,16,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33],coverag:0,creat:36,creation:4,credenti:36,custom:37,data:[14,27,28,29,36],datalib:34,datasourc:[5,37,38],definit:38,design:1,develop:[2,3,5,6,7,8,12],dimens:4,docstr:0,document:2,earth:36,earthdata:36,earthdatasess:16,environ:12,exampl:[3,4,5,6,7,8,10,37],extend:37,featur:13,file:38,ftp:38,govern:0,helper:4,imag:38,implement:3,implicit:4,instal:[2,12],integr:0,interfac:[3,5,6,7,8],interpol:28,lint:0,login:36,method:4,miscellan:4,monotoniccoordinates1d:4,motiv:36,multidemension:4,nasa:36,node:[19,20,30,37,38],note:[3,38],oper:4,orderedcompositor:18,organ:2,output:38,paper:39,param:37,pdf:2,pipelin:[31,38],podpac:[11,12,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,36,37,40],present:39,properti:4,purpos:11,quick:15,refer:[2,14,15,39],repositori:12,requir:[3,4,5,6,7,8],roadmap:13,runtim:36,sampl:38,save:36,scheme:13,set:[15,21,36],shorthand:4,smap:34,sourc:14,specif:[3,4,5,6,7,8],stack:4,stackedcoordin:4,style:[0,20],tag:37,test:[0,2],todo:13,trait:4,type:29,uniformcoordinates1d:4,unit:32,user:[3,5,6,7,8,12],util:[26,33],version:13,websit:2,why:40}})