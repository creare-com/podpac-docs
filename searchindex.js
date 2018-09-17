Search.setIndex({docnames:["developer/contributing","developer/design","developer/docs","developer/specs/caching","developer/specs/coordinates","developer/specs/data-source","developer/specs/interpolation","developer/specs/nodes","developer/specs/pipelines","developer/specs/user_stories","examples","index","install","roadmap","user/api","user/api-min","user/api-min/podpac.core.authentication.EarthDataSession","user/api-min/podpac.core.compositor.Compositor","user/api-min/podpac.core.compositor.OrderedCompositor","user/api-min/podpac.core.node.Node","user/api-min/podpac.core.node.Style","user/api-min/podpac.settings","user/api/podpac.core.authentication","user/api/podpac.core.compositor","user/api/podpac.core.data.interpolate","user/api/podpac.core.node","user/api/podpac.core.pipeline","user/api/podpac.core.units","user/api/podpac.core.utils","user/api/podpac.datalib.airmoss","user/api/podpac.datalib.smap","user/coordinates","user/earthdata","user/nodes","user/pipelines","user/references","why-podpac"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["developer/contributing.md","developer/design.rst","developer/docs.md","developer/specs/caching.md","developer/specs/coordinates.md","developer/specs/data-source.md","developer/specs/interpolation.md","developer/specs/nodes.md","developer/specs/pipelines.md","developer/specs/user_stories.md","examples.md","index.rst","install.md","roadmap.md","user/api.rst","user/api-min.rst","user/api-min/podpac.core.authentication.EarthDataSession.rst","user/api-min/podpac.core.compositor.Compositor.rst","user/api-min/podpac.core.compositor.OrderedCompositor.rst","user/api-min/podpac.core.node.Node.rst","user/api-min/podpac.core.node.Style.rst","user/api-min/podpac.settings.rst","user/api/podpac.core.authentication.rst","user/api/podpac.core.compositor.rst","user/api/podpac.core.data.interpolate.rst","user/api/podpac.core.node.rst","user/api/podpac.core.pipeline.rst","user/api/podpac.core.units.rst","user/api/podpac.core.utils.rst","user/api/podpac.datalib.airmoss.rst","user/api/podpac.datalib.smap.rst","user/coordinates.md","user/earthdata.md","user/nodes.md","user/pipelines.md","user/references.md","why-podpac.md"],objects:{"podpac.core":{authentication:[22,0,0,"-"],compositor:[23,0,0,"-"],node:[25,0,0,"-"],pipeline:[26,0,0,"-"],units:[27,0,0,"-"],utils:[28,0,0,"-"]},"podpac.core.authentication":{EarthDataSession:[22,1,1,""],SessionWithHeaderRedirection:[22,1,1,""]},"podpac.core.authentication.EarthDataSession":{__init__:[16,2,1,""]},"podpac.core.authentication.SessionWithHeaderRedirection":{rebuild_auth:[22,2,1,""],update_login:[22,2,1,""]},"podpac.core.compositor":{Compositor:[23,1,1,""],OrderedCompositor:[23,1,1,""]},"podpac.core.compositor.Compositor":{__init__:[17,2,1,""],composite:[23,2,1,""],definition:[23,3,1,""],execute:[23,2,1,""],get_native_coordinates:[23,2,1,""],get_shared_coordinates:[23,2,1,""],get_source_coordinates:[23,2,1,""],iteroutputs:[23,2,1,""]},"podpac.core.compositor.OrderedCompositor":{__init__:[18,2,1,""],composite:[23,2,1,""]},"podpac.core.data":{interpolate:[24,0,0,"-"]},"podpac.core.data.interpolate":{InterpolationException:[24,4,1,""],InterpolationPipeline:[24,1,1,""],Interpolator:[24,1,1,""],NearestNeighbor:[24,1,1,""],OptimalInterpolation:[24,1,1,""],Radial:[24,1,1,""],Rasterio:[24,1,1,""],ScipyGrid:[24,1,1,""],ScipyPoint:[24,1,1,""]},"podpac.core.data.interpolate.InterpolationPipeline":{kwargs:[24,3,1,""]},"podpac.core.data.interpolate.Interpolator":{source_coords_subset:[24,2,1,""],validate:[24,2,1,""]},"podpac.core.node":{Node:[25,1,1,""],NodeException:[25,4,1,""],Style:[25,1,1,""]},"podpac.core.node.Node":{__init__:[19,2,1,""],base_definition:[25,2,1,""],base_ref:[25,3,1,""],cache_dir:[25,3,1,""],cache_obj:[25,2,1,""],cache_path:[25,2,1,""],clear_disk_cache:[25,2,1,""],copy_output_array:[25,2,1,""],definition:[25,3,1,""],evaluated_hash:[25,3,1,""],execute:[25,2,1,""],get_hash:[25,2,1,""],get_image:[25,2,1,""],get_output_coords:[25,2,1,""],get_output_path:[25,2,1,""],init:[25,2,1,""],initialize_array:[25,2,1,""],initialize_coord_array:[25,2,1,""],initialize_output_array:[25,2,1,""],latlon_bounds_str:[25,3,1,""],load:[25,2,1,""],load_cached_obj:[25,2,1,""],pipeline:[25,3,1,""],pipeline_definition:[25,3,1,""],pipeline_json:[25,3,1,""],shape:[25,3,1,""],write:[25,2,1,""]},"podpac.core.node.Style":{__init__:[20,2,1,""]},"podpac.core.units":{Units:[27,1,1,""],UnitsDataArray:[27,1,1,""],UnitsNode:[27,1,1,""]},"podpac.core.units.Units":{validate:[27,2,1,""]},"podpac.core.units.UnitsDataArray":{cumsum:[27,2,1,""],max:[27,2,1,""],mean:[27,2,1,""],min:[27,2,1,""],part_transpose:[27,2,1,""],set:[27,2,1,""],sum:[27,2,1,""],to:[27,2,1,""],to_base_units:[27,2,1,""]},"podpac.core.units.UnitsNode":{validate:[27,2,1,""]},"podpac.core.utils":{cached_property:[28,5,1,""],clear_cache:[28,5,1,""],common_doc:[28,5,1,""],get_settings_file:[28,5,1,""],load_setting:[28,5,1,""],save_setting:[28,5,1,""]},"podpac.datalib":{airmoss:[29,0,0,"-"],smap:[30,0,0,"-"]},"podpac.datalib.airmoss":{AirMOSS:[29,1,1,""],AirMOSS_Site:[29,1,1,""],AirMOSS_Source:[29,1,1,""]},"podpac.datalib.airmoss.AirMOSS":{get_available_sites:[29,2,1,""]},"podpac.datalib.airmoss.AirMOSS_Site":{get_available_dates:[29,2,1,""],get_native_coordinates:[29,2,1,""]},"podpac.datalib.airmoss.AirMOSS_Source":{get_data:[29,2,1,""],get_native_coordinates:[29,2,1,""]},"podpac.datalib.smap":{SMAP:[30,1,1,""],SMAPBestAvailable:[30,1,1,""],SMAPDateFolder:[30,1,1,""],SMAPPorosity:[30,1,1,""],SMAPProperties:[30,1,1,""],SMAPSource:[30,1,1,""],SMAPWilt:[30,1,1,""],np2smap_date:[30,5,1,""],smap2np_date:[30,5,1,""]},"podpac.datalib.smap.SMAP":{base_ref:[30,3,1,""],definition:[30,3,1,""],get_available_times_dates:[30,2,1,""],get_partial_native_coordinates_sources:[30,2,1,""],get_shared_coordinates:[30,2,1,""],get_source_coordinates:[30,2,1,""],keys:[30,3,1,""],source:[30,3,1,""]},"podpac.datalib.smap.SMAPBestAvailable":{get_shared_coordinates:[30,2,1,""]},"podpac.datalib.smap.SMAPDateFolder":{get_available_coords_sources:[30,2,1,""],get_shared_coordinates:[30,2,1,""],get_source_coordinates:[30,2,1,""],keys:[30,3,1,""],source:[30,3,1,""]},"podpac.datalib.smap.SMAPProperties":{get_native_coordinates:[30,2,1,""]},"podpac.datalib.smap.SMAPSource":{get_available_times:[30,2,1,""],get_data:[30,2,1,""],get_native_coordinates:[30,2,1,""],latkey:[30,3,1,""],lonkey:[30,3,1,""],product:[30,3,1,""]},podpac:{settings:[21,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:function"},terms:{"3rd":0,"5th":4,"boolean":[4,5,17,23,30,34],"break":13,"byte":3,"case":[0,13,17,23,27,30],"class":[0,1,4,15,16,17,18,19,20,22,23,24,25,27,29,30,32,33,34],"default":[0,4,5,6,13,17,19,23,25,30,33,34],"enum":[4,5,6],"final":[9,19,25],"float":[4,19,25,30,31,33],"function":[0,1,3,5,13,15,19,24,25,28,30,31],"import":[10,30,32,34],"int":[0,4,5,17,23],"long":[0,17,23],"new":[0,4,5,12,17,23,30,33],"return":[0,4,5,17,18,19,22,23,24,25,27,28,29,30,34],"static":[2,3],"true":[4,5,17,19,23,25,30,33,34],"try":[0,12,30],"var":0,"while":[0,3],AWS:[1,3,11,13,36],Adding:0,And:[0,2,4],But:3,CRS:4,For:[0,3,4,6,12,13,17,23,27,30,31,32,33,34],GIS:0,IDE:0,Not:[10,19,25],One:[17,23],The:[0,1,2,3,4,5,10,11,12,13,17,19,23,25,30,31,33,34],Then:[2,32],There:[0,36],These:[0,5,12,31,34],Use:11,Used:30,Uses:[3,19,25,30],Using:[3,5,32],WCS:[5,10],With:22,__doc__:28,__init__:[0,16,17,18,19,20],_ca:4,_ca_lat:4,_cu:4,_cu_lat:4,_cu_lon:4,_cu_tim:4,_get_data:5,_interpol:5,_interpolate_requested_coordin:5,_stack:4,_static:2,_templat:2,_update_dataset:5,abil:[3,36],abl:[3,33],about:[0,3],abov:[0,3,4],abss:3,academ:36,accept:0,access:[0,1,3,5,10,11,13,22,30,32,36],accomplish:3,account:[3,10,36],accur:[17,20,23],across:[3,30,36],activ:[12,36],actual:[0,17,23],adapt:0,add:[0,2,3,4,5,6,7,8,9,13,30],adding:3,addit:[0,3,4,19,25,31,32,33],address:[22,36],adher:0,advanc:[0,36],after:[3,5,12,17,19,23,25,30,31],aftward:5,agenc:36,aim:36,airmoss_sit:29,airmoss_sourc:29,aka:3,alglib:[0,1],algorithm:[0,1,3,10,11,19,25,36],align:4,all:[0,2,4,5,6,10,12,15,17,19,23,25,30,31],all_cach:[19,25],alloc:[17,19,23,25],allow:[4,5,13,17,23,31,34],allow_non:[5,27,33],allow_pickl:34,along:34,alreadi:0,also:[0,4,17,19,23,25,31,33,34,36],alt:[4,31],alwai:[0,3,31],amazon:36,america:3,amongst:[17,23],ams2018:35,anaconda:12,analys:36,analysi:[3,11,30,36],analyt:36,ani:[0,5,17,19,23,25,30],anonym:0,anoth:[4,34],api:[2,11],app:32,appear:[18,23],append:13,appli:3,applic:32,approach:36,appropri:5,approv:32,arang:[4,31],arbitrari:[4,5],architectur:[11,36],archiv:[3,32,36],area:4,area_bound:4,arg:[3,20,24,25,27],argument:[19,25,31,34],arithmet:34,arr:[19,25],arrai:[0,3,4,5,17,19,23,25,27,30,33],array1d:4,array2d:4,array_lik:0,arraycoordin:4,arraycoordinates1d:31,arraysourc:5,artifact:0,aspect:36,assign:[19,25],associ:[30,34],assum:[0,12,30],attent:30,attr:[5,19,25,27,28,33,34],attribut:[4,5,13,16,17,18,19,20,22,23,25,29],auth:22,auth_class:30,auth_host:[16,22],auth_sess:[30,32],authent:[30,32],author:32,auto:[0,2],autobuild:2,autodoc:2,autodoc_default_flag:14,autodocstr:0,autogen:[2,14],autogener:[14,15],autom:13,automat:[2,5,13,14,17,19,23,25,31,32,36],avail:[0,3,4,30,33,36],available_interpol:24,averag:6,avoid:0,awar:[17,18,19,23,25],aws:[17,19,23,25],back:[0,3,5,30],backblaz:5,backward:13,badexcept:0,balanc:3,band:5,barrier:36,base64:[19,25],base:[1,4,5,17,18,19,23,25,30,33,34,36],base_definit:[19,25],base_defit:[19,25],base_dir_url:29,base_ref:[19,25,30],base_url:[29,30],basic:[3,5,24,34],bass:3,becaus:[0,10,17,23],becom:[3,5],been:[19,25],befor:34,behav:[4,13],behavior:34,being:[0,19,25,30],below:[0,14,31,34],benefit:[0,36],best:30,better:3,between:30,bilinear:[6,34],binari:3,bleed:12,bool:[4,17,19,21,23,25,30,34],both:[0,30,31,36],bottleneck:3,bottom:[5,32],bound:[4,5,19,25],box:4,bracket:0,branch:[0,12],browser:2,bucket:[3,5],bug:0,builtin:34,button:32,cach:[2,3,13,17,19,23,25,30],cache_cir:0,cache_dir:[19,25],cache_native_coordin:[17,23,30],cache_obj:[19,25],cache_path:[19,25],cache_to_s3:21,cache_typ:[19,25],cached_properti:[3,28],cachei:3,calcul:[3,4,17,23],california:3,call:[3,5,30],caller:3,can:[0,3,4,5,10,11,17,19,23,24,25,30,31,32,33,34],cannot:[24,30],capabl:36,captur:1,care:3,cast:[4,30],cell_elev:30,cell_land_fract:30,central:3,certain:4,certiain:4,cfg:0,chang:[0,2,3,4,17,23,28],channel:12,check:[0,5,30],checkout:[0,12],cherri:15,child:[5,32],children:[17,19,23,25],choic:0,choos:30,cint:5,cite:0,clear:[19,25],clear_cach:28,clear_disk_cach:[19,25],click:32,client:0,clim:[20,25],clinspac:31,close:36,cloud:[1,5,11,19,25,36],clsm_cdcr1:30,clsm_cdcr2:30,clsm_dzgt1:30,clsm_dzgt2:30,clsm_dzgt3:30,clsm_dzgt4:30,clsm_dzgt5:30,clsm_dzgt6:30,clsm_dzpr:30,clsm_dzrz:30,clsm_dzsf:30,clsm_dztsurf:30,clsm_poro:30,clsm_wp:30,cluster:3,cmap:[20,25],code:[2,12,19,25,32,36],collabor:[11,36],colormap:[19,25,34],com:[12,22],combin:[11,18,23,31],command:0,comment:0,commerci:36,commit:0,common:[4,17,19,23,25],common_doc:[0,28],common_parameters_listed_abov:0,commond:28,commun:[0,3,13,36],compat:[0,13,30],complet:[17,23],complex:[0,3,36],complic:5,composit:[11,17,18,23,34],compositor:[0,19,25,30],comput:[0,3,11,12,30,36],concat:4,concaten:4,conda:2,conf:2,config:[14,27],configur:[0,2],conjunct:3,consid:4,consist:0,construct:[17,23,30],contain:[0,1,4,17,18,19,23,25,30,31],contribut:[11,13],control:0,contruct:5,conveni:[30,31,32],convert:[0,2,30,31],convienc:2,convolut:13,coodin:4,coord:[4,10,19,25,27,31,33],coord_ref_si:4,coordin:[0,5,9,10,11,13,17,19,23,24,25,29,30],coordinate_index:30,coordinate_index_typ:[5,30],coordinates_index:[5,29,30],coordint:4,coords1d:4,coords_copi:4,coorind:0,copi:[2,4,19,25],copy_output_arrai:[19,25],core:[0,1,4,12,30,32,33,34],correct:[0,17,19,23,25,30],correspond:[30,31],cost:3,cost_func:24,cost_setup:24,cost_tol:24,could:[0,3,4,15,17,23,30],cov:0,cover:30,coverag:13,coveral:0,crang:31,crear:12,creat:[0,3,4,5,10,12,19,25,31,33],creation:13,credenti:30,creep:0,ctype:[4,31],cubic:6,cumsum:27,current:[17,19,23,25,36],custom:[0,13,34],dai:[17,23],daraarrai:30,dask:[3,13,36],data:[0,1,3,4,5,9,10,11,13,17,19,22,23,25,27,30,31,33,34,36],dataarrai:[4,17,18,19,23,25,27,30],dataarraycoordin:4,databas:3,datafram:3,datakei:[29,30],datalib:[0,1,10,34],dataset:[5,17,23,30,32],datasourc:[0,3,13,17,19,23,25,30],datatyp:[12,19,25],date:[9,17,23,30],date_file_url_r:30,date_time_file_url_r:30,date_time_url_r:30,date_url_r:[29,30],datetim:[3,31],datetime64:[4,30,31],deal:[30,36],debug:3,decid:0,decor:28,def:[0,5,34],default_ctyp:4,default_distance_unit:4,default_valu:[27,33],defin:[0,3,4,5,17,19,23,25,30,31,33,34],definit:[3,5,13,17,19,23,25,30,33],definition_return:[19,25],defint:[17,23],degre:[30,36],delet:[3,19,25],delta:4,demo:9,demonstr:1,depend:[4,5,12,30],dependson:3,deploi:36,deploy:1,deprec:[19,25],deriv:[17,19,23,25],describ:[0,4,17,23,30,33,34],descrip:[19,25],descript:[0,16,17,18,20,21,22,23,24,25,27,28,29,30],design:[11,33],desir:[17,19,23,25],destin:[24,34],detail:[0,4,30,32,33],detect:2,determin:[5,17,19,23,25],deval:12,develop:[10,11,13,17,23,36],developerspec:33,dict:[4,6,19,25,28,30,31],dictioari:[19,25],dictionari:[3,4,5,17,19,23,25,28,34],differ:[3,4,17,23,30,36],dill:3,dim:[4,5,6,19,25,27,31],dimens:[13,17,19,23,25,30,31],dimension:4,dir:0,direct:14,directli:[4,36],directori:[0,1,2,3,19,25],disciplin:0,discrib:[19,25],disjoint:36,disk:[3,19,25,30],dispar:36,displai:[19,22,25],dist:1,distribut:[2,3,12,36],dlat:[4,5],dlon:[4,5],doc:[1,2],doc_dict:28,docstr:[2,28],doctest:[0,2],doctr:[13,28],document:[0,1,5,11,13,14,15,33],doe:[0,3,17,23,30],doesn:[3,5,19,25],domain:[0,1],don:5,done:0,down:[17,23],downsampl:4,downscaled_sm:34,driven:3,drop:[0,4],dtype:[4,19,25,30],due:36,dure:[2,13],each:[2,4,13,17,23,30,31,32,33,34],earth:[10,11,30,36],earthdata:[22,30],earthdatasess:[22,30,32],eas:4,easi:36,easier:[0,15],ecs:30,edg:12,editor:0,eds:32,effici:[17,23,24,30],either:[0,4,31,32],element:4,empti:[4,19,25,30],enabl:[13,32,36],encod:[19,25,27],encompass:36,encount:12,encourag:0,end:[4,13],endpoint:13,enhanc:31,enter:[2,32],entir:[17,19,23,25],entri:2,enumeration_color:[20,25],enumeration_legend:[20,25],environ:1,environment:0,eosdi:36,eqn:34,equival:[4,31,34],error:[19,25],esa:36,especi:[17,23],essenti:[1,30],etc:[0,2,4,17,19,23,25,31],eval:5,eval_coord:24,evalu:[5,13,17,19,23,25,30,31],evaluated_hash:[19,25],even:[0,4,5],everi:[4,5,17,23,30,32],everyth:[13,17,19,23,25],exact:31,exactli:[4,5],exampl:[0,1,11,17,22,23,30,31,32,34],exce:36,excel:36,except:[4,24,25],execut:[3,5,10,13,17,18,19,23,25,30,33,34,36],exist:[5,12,19,25,36],expand:13,expect:[19,25,30,33],experi:12,expert:0,expertis:36,expir:[3,13],expiresin:3,explan:0,explicit:4,explicitli:4,exploit:36,explor:36,expos:0,express:30,extend:[0,3,5,19,25],extent:4,extract:30,extrapol:24,extrem:31,face:0,facilit:[4,11],fact:[3,36],fail:0,fairli:0,fall:[3,4,31],fallback:4,fals:[4,5,17,19,23,25,27,30,33,34],famili:30,faster:[17,23],fastpath:27,featur:0,feet:4,few:[5,17,23],field:28,fifthfunc:0,figur:3,file:[0,2,3,5,16,19,25,30,32,34],file_url_r:30,file_url_re2:30,filenam:[19,25,30],filepath:5,filesystem:3,fill:[4,17,23,30],fillval:[19,25],find:[30,32],first:[0,17,23,30],fix:[5,13,34],fix_import:34,fixed_ord:24,flag:[17,19,23,25],flat:5,focu:[11,27],folder:[17,23,30],folder_d:30,follow:[0,1,2,4,10,13,31,32],forc:3,forecast:3,forg:12,fork:0,form:31,format:[0,2,5,13,19,25,28,30,34,36],formula:3,found:[10,33,34],fourthfunc:0,framework:36,frequenc:3,from:[0,2,3,4,5,12,16,19,22,24,25,30,31,32,34,36],from_tupl:4,from_xarrai:4,full:[0,14,19,25,34],func:28,further:30,fusion:36,futur:[3,5,19,25],fuzzi:0,gauss:6,gener:[0,1,2,3,10,13,18,23,27,30,31],geodet:4,geohash:3,geopanda:36,geoscienc:0,geoserv:5,geospati:[3,11,13,36],geotif:34,geotiff:[3,5],gesdic:32,get:[0,3,4,5,9,11,17,19,22,23,25,30],get_available_coords_sourc:30,get_available_d:29,get_available_sit:29,get_available_tim:30,get_available_times_d:30,get_data:[5,29,30],get_descript:[19,25],get_hash:[19,25],get_imag:[19,25],get_native_coordin:[5,17,23,29,30],get_output_coord:[19,25],get_output_path:[19,25],get_output_shap:[19,25],get_partial_native_coordinates_sourc:30,get_settings_fil:28,get_shared_coordin:[17,23,30],get_source_coordin:[17,23,30],git:[0,12,13],github:[0,11,12],give:[4,18,23,30],given:[4,5,19,25,30],global:30,goal:0,goe:0,going:[0,5],gov:22,graph:3,greatli:36,greek:0,grid:[4,30,31],group:[0,13],groupcoordin:[17,23],guarante:13,guarente:5,guid:11,habitat:0,haggi:0,handl:[3,13,24,27,33],hard:[3,17,23],has:[17,19,23,25,31],hash:[3,13,19,25],hash_return:[19,25],have:[0,3,4,17,19,23,25,27,30,32],hdd:3,hdf5:3,hdf:3,head:13,header:22,height:5,help:[0,13,19,20,25,27],helper:[19,25],here:0,hierarch:0,high:[13,36],higher:0,highland:0,highli:36,hinder:36,hold:[17,23],home:32,hood:4,host:22,hotfix:13,hour:[17,23],how:[0,2,4,13,17,19,22,23,25,30],howev:[3,36],html:[0,1,2,12],http:[2,12,22,30],ideal:3,idempot:3,identifi:13,ignor:[4,19,25],ignore_miss:4,illustr:0,imag:[1,2,19,25,34],implement:[0,1,4,5,13,17,19,23,24,25,30,33,36],implicit_pipeline_evalu:[19,25],improv:13,includ:[0,1,2,3,4,5,6,12,13,17,19,23,25,30,31,33,34],incomplet:[13,17,23,30],inconsist:30,incorpor:[0,36],incorrect:13,increas:13,index:[2,4,17,23,30],indic:[17,19,23,25,30],individu:4,info_text:27,inform:[3,5,17,23,36],inherit:30,init:[19,25],init_typ:[19,25],initi:[19,20,25],initialize_arrai:[19,25],initialize_coord_arrai:[19,25,30],initialize_output_arrai:[19,25],inlin:0,input:[0,2,3,4,5,13,17,19,23,25,30,31,34],instal:[1,11],instanc:[5,19,25,30],instanti:33,instead:[5,12],institut:36,instruct:[1,12,32],integ:[4,31],integr:[13,36],intent:12,interact:[3,32],interest:32,interfac:[0,4,13,17,19,23,25,33,36],intermedi:3,intern:[0,10],interpol:[3,5,11,13,17,19,23,25,34],interpolate_opt:6,interpolationexcept:24,interpolationpipelin:24,interpret:[2,5,31],intersect:[4,5],interv:3,invalid_dim:24,investig:36,invoc:13,involv:3,irregularli:4,is_descend:4,is_enumer:[20,25],is_monoton:4,is_source_coordinates_complet:[17,23],is_uniform:4,issu:[0,12,13,32],item:[4,31],iter:4,iterchunk:4,iteroutput:[17,23],its:[4,5,17,19,23,25,31,34],join:4,jointli:[19,25],json:[3,19,25,32,34],jupyt:[1,10],just:[3,4,5,17,23,31],kappa:34,keep:[0,3,22],kei:[3,4,16,28,30,31],key_spec:3,keyerror:4,keyword:[19,25],kind:[3,5],klepto:3,know:[3,30,33],known:13,krige:[0,24],kwarg:[3,17,18,19,20,23,24,25,27,29,30],label:4,lambda:[3,13],lanczo:6,larg:31,last:[19,25,34],lat:[4,5,9,10,30,31],lat_lon:[4,31],late:2,later:34,latest:12,latex:2,latitud:[19,25,30,31],latkei:30,latlon_bounds_str:[19,25],latlon_delta:30,latlon_url_r:30,layer:30,layer_styl:[19,25],layerkei:30,lean:0,learn:36,least:3,leav:5,left:[4,5],len:4,let:12,level:[0,17,23,30,34],lfu:3,librari:[0,1,3,10,22,33,34,36],light:[19,25],like:[0,3,4,24,27,31],likewis:27,limit:[1,3,5,15,17,23],line:[0,4],linspac:[4,31],linux:[12,32],list:[0,4,5,17,19,23,24,25,29,30,31,34],literatur:0,live:2,load:[3,5,16,19,25],load_cached_obj:[19,25],load_set:28,local:[3,5,17,19,23,25,36],locat:[3,5,17,19,23,25],log:32,logic:0,login:30,lon:[4,5,9,10,30,31],long_var_nam:0,longitud:[19,25,30,31],lonkei:30,look:0,lookup:3,low:[17,23],lru:3,mac:[2,12],machin:[12,36],mactex:2,mai:[0,1,3,4,12,17,19,23,25,30,32,33,34],maintain:0,major:[13,36],make:[0,2,3,15,17,23,30],manag:3,mani:[0,17,23,30,36],manner:24,mantain:22,manual:2,map:[3,4,30],mark:0,markdown:2,marker:0,mask:27,master:12,match:[3,30],math:0,matur:0,max:[4,6,13,27,34],maxim:36,maximum:[19,25],mayb:3,mcnoleg:0,mean:[0,27,30],mechan:[5,13,19,25],med:6,medium:3,member:[14,15],memcach:3,memori:[3,17,19,23,25,34],meth:30,method:[0,6,15,16,17,18,19,20,23,25,30,32,34],metpi:36,midpoint:4,migrat:36,miktex:2,min:[2,4,6,27,34],mind:3,minim:[2,36],minimum:[19,25],minor:13,minut:[17,23],miss:[0,4],mix:31,mode:[4,6,12,34],model:[0,31,36],modif:0,modifi:[0,4,13,22],modul:[0,5,14,27,34],moistur:30,moment:12,mongodb:3,monitor:0,monoton:[4,13],month:[17,23],more:[0,2,3,4,5,17,18,23,30,32],moreov:36,most:[0,24,30],motiv:30,move:13,mpi:3,mru:3,much:[17,23],multi:[4,17,23,36],multidimension:31,multiindex:4,multipl:[0,3,4,17,23,30,31],multiprocessor:3,multiscal:36,multitud:36,must:[0,5,17,23,30,34],mwrtm_bh:30,mwrtm_bv:30,mwrtm_clai:30,mwrtm_lewt:30,mwrtm_omega:30,mwrtm_poro:30,mwrtm_rghhmax:30,mwrtm_rghhmin:30,mwrtm_rghnrh:30,mwrtm_rghnrv:30,mwrtm_rghpolmix:30,mwrtm_rghwmax:30,mwrtm_rghwmin:30,mwrtm_sand:30,mwrtm_soilcl:30,mwrtm_vegcl:30,mwrtm_wangwp:30,mwrtm_wangwt:30,my_attr1:33,my_attr2:33,my_new_featur:0,my_pipeline_output:34,my_plugin:34,mycompositor:34,mycustomnod:34,mydatasourc:[33,34],mymodul:34,mynod:34,mynode1:34,mynode2:34,myothernod:34,myotherpipelin:34,myplugin:34,myresult:34,mythirdnod:34,n5eil01u:30,n_thread:[17,23],nad87:4,name:[0,4,17,19,20,23,25,27,30,31,34],namespac:0,nan:[5,18,19,23,25,30],nan_val:[5,29,30],nasa:[3,5,10,11,17,22,23,36],nativ:[4,5,9,17,19,23,25,30],native_coordin:[5,17,19,23,25,30],ndarrai:[0,5,17,19,23,25,27,30],ndim:[4,31],nearest:6,nearestneighbor:24,necessari:[4,36],need:[0,2,3,4,5,17,19,23,24,25,30,32,33],nest:0,network:[0,3],neural:0,new_dim:27,newfunc:0,no_data_v:5,no_styl:[19,25],node:[0,1,5,10,11,13,17,18,23,30,31,32],node_cach:[19,25],node_default:[19,25],nodeexcept:[19,25],non:[0,17,23,30,36],none:[4,5,13,16,17,18,19,20,22,23,24,25,27,28,30,34],north:3,note:[0,10,17,19,23,25,30,31,32,34],notebook:[1,10,33],notimplementederror:[5,17,19,23,24,25,30],now:[0,27,33],np2smap_dat:30,npy:34,npyoutput:34,nsidc:[30,32],nsidc_datapool_op:32,number:[0,3,19,25,31,34],numer:4,numpi:[0,3,5,17,19,23,25,30,31,34],obj:[3,19,25,27],object:[0,3,4,13,19,25,30,34],observ:[5,11,36],occur:36,omega:0,omit:34,onc:[17,18,23,32],one:[0,2,3,4,5,6,17,23,31],ones:[19,25],onli:[0,3,4,6,12,17,19,23,25,30],only_seldom_used_keyword:0,onto:[12,24],open:[5,36],open_dataset:5,opendap:[30,32],opendap_url:32,opendatacub:36,oper:3,oppos:[4,17,23],optim:[17,23,24],optimalinterpol:24,option:[0,2,4,6,14,15,16,17,18,19,22,23,24,25,27,28,30,33,34],order:[5,18,23,30,31,36],orderedcompositor:[23,34],ordereddct:[19,25],ordereddict:[17,19,23,25],org:30,organ:0,orient:0,origin:[3,12],other:[0,2,3,4,5,11,12,13,34],otherfunc:0,otherwis:[4,5,17,19,23,25,30,31],our:[0,32,36],out:[0,3],out_dir:[19,25],outdir:[19,25,34],outer:4,outlin:2,output:[0,5,13,17,18,19,23,25,30,33,34],outputdata:34,outsid:4,over:[2,3,4,9,17,23],overlap:30,overrid:[15,22],overwrit:[4,5,17,18,19,24,25],own:[5,17,19,23,25,33],packag:[0,2,4,12],pad:24,page:[1,2,32],pai:30,pair:31,panda:[4,5],pangeo:36,paragraph:0,parallel:[13,17,19,23,25,36],param:[13,34],paramet:[0,3,16,17,18,19,22,23,24,25,27,28,29,30,34],parameter:4,paramt:3,pars:4,part:[4,17,19,23,25,32,33],part_transpos:27,parti:0,partial:30,particular:[1,3,9,13,27,30,33],particularli:31,pass:[0,5,17,19,23,25,30],password:[16,22,30,32],path:[0,12,19,25,28,34],patho:3,pattern:3,pdflatex:2,pep8:0,perform:3,perman:[19,25],petabyt:36,physic:4,pick:15,pickl:[3,19,25,34],pint:[19,25],pip:[2,12],pipe:3,pipelin:[0,3,5,10,11,13,17,19,23,25,33,36],pipeline_definit:[19,25],pipeline_json:[19,25],place:[4,13],plain:[22,32],plan:[19,25],platform:12,plot:[19,25],plugin:[0,17,23,34],png:[19,25,34],podaac:4,podac:0,podpac:[0,1,2,3,4,5,10,13,31,34,35],point:[0,4,13,17,23,30,31],poros:30,portion:3,possibl:[0,3,10,27],potenti:13,power:36,pre:[17,23],predict:3,prefix:[19,25],prepared_request:22,prepend:[30,34],present:[0,19,25,30],preserv:4,press:2,preview:6,previou:3,primari:[0,19,25],primarili:30,print:0,priorit:[3,13],prioriti:[3,13],procedur:12,process:[0,3,5,11,13,30,31,33,36],product:[10,11,17,23,29,30,34,36],profil:32,program:36,project:[0,11],promot:13,prompt:32,properli:0,properti:[3,19,25,30],protocol:[3,36],provid:[0,3,5,30,31,32,34],pull:0,purpos:3,put:3,pydap:32,pydap_nod:32,pylint:0,pylintrc:0,pytest:0,python:[0,1,2,3,12,22,31,32,36],queri:3,quick:[5,11],quickli:5,radial:24,rais:[0,4,5,17,19,23,24,25,30],ram:[3,19,25],rand:5,random:5,rang:[4,31],rare:0,rasterio:[12,24,36],rasteriosourc:5,rather:31,raw:3,read:[2,4,5],read_onli:27,readi:32,readthedoc:12,rebuild:2,rebuild_auth:22,rebuilt:2,recenc:3,recommend:12,recommonmark:2,record:[0,13],redi:3,redirect:22,redon:3,reduct:3,refactor:13,refer:[0,4,11,19,25],referenc:[0,13,34],region:[9,30],regist:32,registr:32,registri:[19,25],regular:30,regularli:[4,30],reject:0,rel:[17,23,34],relat:[11,30,31],relationship:0,releas:13,relev:0,reload:2,remain:13,remot:0,remov:[4,5,36],repeat:30,replac:[4,5,17,23,28,30,34],report:0,repositori:[0,36],repres:[3,4,31],reproduc:3,reproject:13,request:[0,3,4,5,13,17,18,19,22,23,25,30],requested_coordin:[5,19,25],requested_source_coordin:5,requested_source_coordinates_index:5,requested_source_data:5,requir:[10,17,23,31,32,34,36],reserv:3,resolut:[3,4,30,36],resourc:[3,30,36],respect:3,respond:3,respons:22,restrict:31,result:[3,4,17,18,23,34],rethink:13,retreiv:[19,25],retriev:[3,10,19,25,30,31,32,36],reusabl:36,review:0,right:[4,5],rigth:4,roadmap:[0,11],robust:3,root:[0,2,3,19,25],root_path:21,rootdatakei:30,rotat:4,routin:36,rpc:3,rst:2,rtd:2,rule:[17,23],run:[0,2,3,5,19,25,32],runtimeerror:30,s3_bucket_nam:21,safe:4,same:[3,4,17,23,30,31],save:[3,34],save_set:28,scalabl:36,scienc:[11,36],scientif:[1,36],scientist:[11,36],scipygrid:24,scipypoint:24,screen:32,script:[2,32],scroll:32,seamless:11,seamlessli:36,second:[0,17,23],section:[0,2,13],secur:32,see:[0,2,5,10,19,20,25,30,31,33,34],seem:[17,23],segment:4,select:4,self:[0,4,5,16,18,19,20,23,25,28,30,34],sens:0,sentenc:0,sentinel:30,seper:0,serial:[3,17,19,23,25],serv:[2,3,5,19,25],server:[2,3,5,17,23,30],serverless:3,servic:[19,25,36],servis:3,session:[22,30,32],sessionwithheaderredirect:22,set:[0,3,4,5,16,17,19,23,25,27,30,33,34,36],setup:0,sever:[0,34],shape:[4,13,19,25,31],shard:3,share:[11,17,19,23,25,30,36],shared_coordin:[17,23],shell:3,shortcut:[4,5],should:[0,3,4,5,11,13,19,24,25,30,32,33,34],shouldn:0,signatur:20,silent:13,similar:[4,31],simpl:[3,5,33],simpler:12,simpli:2,simplifi:36,simultan:[17,23],sing:4,singl:[0,3,4,6,17,23,27,30,31],singleton:4,site:29,site_url_r:29,size:[3,4,5,13,19,25,31],slice:[4,5,30],slightli:15,slower:[17,23],small:[0,17,23],smap2np_dat:30,smap:[1,3,9,10,34],smap_base_url:30,smap_incomplete_source_coordin:30,smap_l4_sm_lmc_00000000t000000_vv3030_001:30,smap_product_dict:30,smap_product_map:[10,30],smap_product_opt:10,smapbestavail:30,smapdatefold:30,smapporos:30,smapproperti:30,smapsourc:30,smapwilt:30,softwar:[0,36],soil:30,sole:30,some:[0,3,4,5,12,19,25,30,31,33],someth:3,somewhat:12,sourc:[0,1,2,5,10,11,12,16,17,18,19,20,22,23,24,25,27,28,29,30,31,32,33,34,36],source_coord:24,source_coordin:[5,17,23,30],source_coords_subset:24,sourcea:34,sourceb:34,sourcec:34,space:[4,30],spatial:30,spec:[3,5,6,7,8],special:[24,30],specif:[0,1,13,15,19,25,30,36],specifi:[0,3,4,5,13,15,19,25,30],sphinx:[1,2,14],sphinx_rtd_them:2,spl4smau:34,spl4smlm:30,spline:6,split:4,sql:3,sre_pattern:30,ssd:3,ssh:3,stabl:12,stack:[4,30],stackedcoordin:31,stackedcoordina:4,stage:32,standard:[19,25,36],start:[4,11,31],startpoint:13,state:3,statu:0,step:[4,31],stop:[2,4,17,23,31],storag:[3,36],store:[3,5,17,19,23,25,30,32,36],stori:9,str:[3,4,6,16,17,19,22,23,25,27,30],strict:0,stride:30,string:[4,19,22,25,30,31,34],structur:[0,1],style:[2,3,19,25],sub:[4,13],subclass:[5,19,25,30,33,34],subject:3,sublim:0,submodul:[0,34],subselect:[17,23],subset:[3,11,17,23,24,30],sum:27,summari:[0,16,17,20,21,22,23,24,25,27,28,29,30],suppli:[5,17,19,23,25,34],support:[2,3,4,6,13,17,19,23,25,31,36],supported_dim:24,suppos:24,sure:[3,4],symbol:0,syntax:0,system:[0,3,4,30,32,36],t18:4,tabl:3,tabular:5,tag:[5,13,17,23],take:[3,5,17,23],target:13,task:36,tbd:[12,33,35],techniqu:0,technolog:3,templat:[2,30],tempor:30,terabyt:36,test:13,test_funct:0,test_method:0,testclass:0,tex:2,text:[0,22,32],than:[0,3,12,17,23,31],thei:[3,13,18,23,30,34],theme:2,thi:[0,1,3,4,5,12,13,15,17,18,19,23,24,25,30,31,32,33],think:3,third:31,thirdfunc:0,those:0,thread:[17,23],three:[31,34],through:[13,32,36],thu:36,tick:0,tier:3,tight:0,tighter:13,tile:30,time:[2,3,4,5,10,17,23,30,31,32],timedelta64:4,timedelta:[4,31],timestamp:3,to_base_unit:27,toc:2,toctre:14,todo:[3,4,5,6,7,8,9,31],togeth:[4,17,18,23,31],toler:24,tolist:10,tool:36,top:[0,5,34],toplevel:4,total:[3,31],track:0,traitlet:[13,27,33,34],transfer:27,transit:36,transport:[5,19,25],transpos:[4,13],treat:30,tricki:[17,23],tsmtr:34,tunnel:3,tupl:[4,19,22,25,31],turn:5,two:[3,4,24,31],type:[0,4,5,17,19,20,21,22,23,24,25,27,28,29,30,32,34],type_without_descript:0,typic:36,udim:4,udrop:4,ultim:0,undefin:27,under:[3,4,13,32],underli:[31,36],underneath:0,underscor:[4,31],understand:[19,25],underutil:36,unfortun:36,unicod:[4,5],unifi:36,uniform:4,uniformcoordin:13,uniformcoordinates1d:31,uniformli:4,union:4,uniqu:[17,23,30,33],unit:[0,4,13,17,18,19,20,23,25,30],unitdataarrai:[5,17,18,23],unitsdataarrai:[0,3,5,13,17,18,19,23,25,27,30],unitsnod:27,unless:34,unlik:31,unstack:4,unsupport:[19,25],until:[0,18,23],updat:[3,5,13,17,23,30],update_login:[22,32],ureg:[0,19,25,27],url:30,usag:13,use:[0,2,3,4,10,13,15,19,25,30,32,34,36],usecas:[3,6,7,8,17,23],used:[0,1,3,4,13,16,17,19,23,25,28,30,31,34],useful:[31,36],user:[0,2,9,11,17,19,23,25,30,32,33],usernam:[16,22,30,32],uses:[0,3,19,25,36],using:[0,2,3,4,5,10,12,14,16,17,19,23,25,27,30,31,32,34,35],usingnasa:30,usual:32,util:0,utm:4,valid:[4,24,27],valid_dim:24,valid_interpol:24,valu:[0,3,4,5,17,18,19,23,25,27,28,30,31,33,34],valueerror:[19,25],var1:0,var2:0,vari:30,variabl:0,variant:[19,25],variat:30,varieti:34,variou:1,vast:36,version:3,via:[0,3,5,30,36],view:11,visit:2,visual:0,vmax:[19,25,34],vmin:[19,25,34],vol:0,wai:[0,4,31],want:[3,4,5,9,17,23,24,27],warn:[19,25],wealth:32,weather:3,web:36,webpag:2,websit:[3,30],weight:[19,25],welcom:0,well:[17,23],were:[17,19,23,25],wgs84:4,what:[3,33],when:[0,3,4,5,13,17,19,22,23,25,30,33],where:[0,1,13,19,25,27,32,36],which:[0,5,17,19,23,25,30,31],whole:0,whose:30,why:11,wider:0,widespread:36,width:5,wiki:22,wikipedia:3,wildli:[17,23],wilt:30,window:[2,4,12,32,36],within:[4,36],without:0,work:[0,3,4,10,12],workflow:10,workstat:36,wors:3,would:[3,4],wrangl:11,wrap:[0,3,4,31],write:[0,19,25,33,34],written:0,xarrai:[3,4,5,17,18,19,23,25,27,30,31,36],xcoord:4,year:[9,17,23],yes:0,yield:[17,23],you:[0,2,5,12,17,23,31,32,33,34],your:[0,12,30,32,33],zero:[19,25],zip:4,zone:4},titles:["Contributing","Design","Documentation","Requirements","Requirements","Requirements","Requirements","Requirements","Requirements","&lt;no title&gt;","Examples","PODPAC","Install","Roadmap","API Reference","API Quick Reference","podpac.core.authentication.EarthDataSession","podpac.core.compositor.Compositor","podpac.core.compositor.OrderedCompositor","podpac.core.node.Node","podpac.core.node.Style","podpac.settings","podpac.core.authentication","podpac.core.compositor","podpac.core.data.interpolate","podpac.core.node","podpac.core.pipeline","podpac.core.units","podpac.core.utils","podpac.datalib.airmoss","podpac.datalib.smap","Coordinates","NASA Earth Data","Nodes","Pipelines","References","Why PODPAC?"],titleterms:{"case":[3,4,5,6,7,8],"class":[5,6],"function":4,"import":0,"public":0,One:4,Use:[3,4,5,6,7,8],account:32,addit:34,advanc:31,airmoss:29,algorithm:[33,34],alias:4,altern:[4,31],api:[0,14,15,31],arraycoordinates1d:4,attribut:[21,24,27,30,33,34],authent:[15,16,22],basecoordinates1d:4,bug:13,build:2,clinspac:4,clone:12,code:0,common:34,compositor:[17,18,23,33,34],conda:12,constant:6,constructor:[4,31],contribut:0,contructor:5,conveni:4,convent:0,convet:0,coordin:[4,14,31],coordinates1d:4,core:[14,15,16,17,18,19,20,22,23,24,25,26,27,28],coverag:0,crang:4,creat:32,creation:[4,31],credenti:32,custom:33,data:[14,24,32],datalib:[29,30],datasourc:[5,33,34],definit:34,design:1,develop:[0,2,3,5,6,7,8,12],dimens:4,docstr:0,document:2,earth:32,earthdata:32,earthdatasess:16,environ:12,exampl:[3,4,5,6,7,8,10,33],extend:33,featur:13,gener:4,govern:0,group:31,implement:3,instal:[2,12],integr:0,interfac:[3,5,6,7,8],interpol:[6,24],introduct:33,lint:0,login:32,method:[4,5],miscellan:4,motiv:32,multidemension:4,nasa:32,node:[19,20,25,33,34],note:3,oper:[4,5],orderedcompositor:18,organ:2,other:36,overview:31,paper:35,pdf:2,pipelin:[26,34],podpac:[11,12,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,36],present:35,privat:5,problem:36,project:36,properti:[4,5,31],purpos:11,quick:15,refer:[2,14,15,35],relat:36,repositori:12,requir:[3,4,5,6,7,8],roadmap:13,rotat:31,runtim:32,sampl:34,save:32,scheme:13,set:[15,21,32],shorthand:4,smap:30,sourc:14,space:31,specif:[3,4,5,6,7,8],stack:31,stackedcoordin:4,style:[0,20],tag:33,test:[0,2],todo:13,trait:[4,5,6],uniformcoordinates1d:4,uniformli:31,unit:27,unstack:31,usag:31,user:[3,5,6,7,8,12],util:28,version:13,websit:2,why:36}})