Search.setIndex({docnames:["developer/aws","developer/contributing","developer/design","developer/docs","developer/specs/caching","developer/specs/coordinates","developer/specs/data-source","developer/specs/interpolation","developer/specs/nodes","developer/specs/pipelines","developer/specs/user_stories","examples","index","install","roadmap","user/api","user/api-min","user/api-min/podpac.core.authentication.EarthDataSession","user/api-min/podpac.core.compositor.Compositor","user/api-min/podpac.core.compositor.OrderedCompositor","user/api-min/podpac.core.node.Node","user/api-min/podpac.core.node.Style","user/api-min/podpac.settings","user/api/podpac.core.authentication","user/api/podpac.core.compositor","user/api/podpac.core.data.interpolate","user/api/podpac.core.node","user/api/podpac.core.pipeline","user/api/podpac.core.units","user/api/podpac.core.utils","user/api/podpac.datalib.smap","user/coordinates","user/earthdata","user/nodes","user/pipelines","user/references","why-podpac"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["developer/aws.md","developer/contributing.md","developer/design.rst","developer/docs.md","developer/specs/caching.md","developer/specs/coordinates.md","developer/specs/data-source.md","developer/specs/interpolation.md","developer/specs/nodes.md","developer/specs/pipelines.md","developer/specs/user_stories.md","examples.md","index.rst","install.md","roadmap.md","user/api.rst","user/api-min.rst","user/api-min/podpac.core.authentication.EarthDataSession.rst","user/api-min/podpac.core.compositor.Compositor.rst","user/api-min/podpac.core.compositor.OrderedCompositor.rst","user/api-min/podpac.core.node.Node.rst","user/api-min/podpac.core.node.Style.rst","user/api-min/podpac.settings.rst","user/api/podpac.core.authentication.rst","user/api/podpac.core.compositor.rst","user/api/podpac.core.data.interpolate.rst","user/api/podpac.core.node.rst","user/api/podpac.core.pipeline.rst","user/api/podpac.core.units.rst","user/api/podpac.core.utils.rst","user/api/podpac.datalib.smap.rst","user/coordinates.md","user/earthdata.md","user/nodes.md","user/pipelines.md","user/references.md","why-podpac.md"],objects:{"podpac.core":{authentication:[23,0,0,"-"],compositor:[24,0,0,"-"],node:[26,0,0,"-"],pipeline:[27,0,0,"-"],units:[28,0,0,"-"],utils:[29,0,0,"-"]},"podpac.core.authentication":{EarthDataSession:[23,1,1,""],SessionWithHeaderRedirection:[23,1,1,""]},"podpac.core.authentication.EarthDataSession":{__init__:[17,2,1,""]},"podpac.core.authentication.SessionWithHeaderRedirection":{rebuild_auth:[23,2,1,""],update_login:[23,2,1,""]},"podpac.core.compositor":{Compositor:[24,1,1,""],OrderedCompositor:[24,1,1,""]},"podpac.core.compositor.Compositor":{__init__:[18,2,1,""],base_definition:[24,3,1,""],composite:[24,2,1,""],eval:[24,2,1,""],find_coordinates:[24,2,1,""],get_shared_coordinates:[24,2,1,""],get_source_coordinates:[24,2,1,""],iteroutputs:[24,2,1,""]},"podpac.core.compositor.OrderedCompositor":{__init__:[19,2,1,""],composite:[24,2,1,""]},"podpac.core.data":{interpolate:[25,0,0,"-"]},"podpac.core.data.interpolate":{Interpolation:[25,1,1,""],InterpolationException:[25,4,1,""],Interpolator:[25,1,1,""],NearestNeighbor:[25,1,1,""],NearestPreview:[25,1,1,""],OptimalInterpolation:[25,1,1,""],Radial:[25,1,1,""],Rasterio:[25,1,1,""],ScipyGrid:[25,1,1,""],ScipyPoint:[25,1,1,""]},"podpac.core.data.interpolate.Interpolation":{interpolate:[25,2,1,""],select_coordinates:[25,2,1,""]},"podpac.core.data.interpolate.Interpolator":{can_interpolate:[25,2,1,""],can_select:[25,2,1,""],init:[25,2,1,""],interpolate:[25,2,1,""],select_coordinates:[25,2,1,""]},"podpac.core.data.interpolate.NearestNeighbor":{can_interpolate:[25,2,1,""],interpolate:[25,2,1,""]},"podpac.core.data.interpolate.NearestPreview":{can_select:[25,2,1,""],select_coordinates:[25,2,1,""]},"podpac.core.data.interpolate.Rasterio":{can_interpolate:[25,2,1,""],interpolate:[25,2,1,""]},"podpac.core.data.interpolate.ScipyGrid":{can_interpolate:[25,2,1,""],interpolate:[25,2,1,""]},"podpac.core.data.interpolate.ScipyPoint":{can_interpolate:[25,2,1,""],interpolate:[25,2,1,""]},"podpac.core.node":{Node:[26,1,1,""],NodeException:[26,4,1,""],Style:[21,1,1,""]},"podpac.core.node.Node":{__init__:[20,2,1,""],base_definition:[26,3,1,""],base_ref:[26,3,1,""],cache_dir:[26,3,1,""],cache_obj:[26,2,1,""],cache_path:[26,2,1,""],clear_disk_cache:[26,2,1,""],create_output_array:[26,2,1,""],definition:[26,3,1,""],del_cache:[26,2,1,""],eval:[26,2,1,""],eval_group:[26,2,1,""],find_coordinates:[26,2,1,""],get_cache:[26,2,1,""],has_cache:[26,2,1,""],init:[26,2,1,""],json:[26,3,1,""],load:[26,2,1,""],load_cached_obj:[26,2,1,""],pipeline:[26,3,1,""],put_cache:[26,2,1,""],write:[26,2,1,""]},"podpac.core.node.Style":{__init__:[21,2,1,""]},"podpac.core.units":{Units:[28,1,1,""],UnitsDataArray:[28,1,1,""],UnitsNode:[28,1,1,""],get_image:[28,5,1,""]},"podpac.core.units.Units":{validate:[28,2,1,""]},"podpac.core.units.UnitsDataArray":{part_transpose:[28,2,1,""],set:[28,2,1,""],to:[28,2,1,""],to_base_units:[28,2,1,""]},"podpac.core.units.UnitsNode":{validate:[28,2,1,""]},"podpac.core.utils":{cached_property:[29,5,1,""],clear_cache:[29,5,1,""],common_doc:[29,5,1,""],get_settings_file:[29,5,1,""],load_setting:[29,5,1,""],optional_import:[29,5,1,""],save_setting:[29,5,1,""],trait_is_defined:[29,5,1,""]},"podpac.datalib":{smap:[30,0,0,"-"]},"podpac.datalib.smap":{SMAP:[30,1,1,""],SMAPBestAvailable:[30,1,1,""],SMAPDateFolder:[30,1,1,""],SMAPPorosity:[30,1,1,""],SMAPProperties:[30,1,1,""],SMAPSource:[30,1,1,""],SMAPWilt:[30,1,1,""],np2smap_date:[30,5,1,""],smap2np_date:[30,5,1,""]},"podpac.datalib.smap.SMAP":{base_definition:[30,3,1,""],base_ref:[30,3,1,""],find_coordinates:[30,2,1,""],get_available_times_dates:[30,2,1,""],get_filename_coordinates_sources:[30,2,1,""],get_shared_coordinates:[30,2,1,""],get_source_coordinates:[30,2,1,""],keys:[30,3,1,""],source:[30,3,1,""]},"podpac.datalib.smap.SMAPBestAvailable":{get_shared_coordinates:[30,2,1,""]},"podpac.datalib.smap.SMAPDateFolder":{base_definition:[30,3,1,""],get_available_coords_sources:[30,2,1,""],get_shared_coordinates:[30,2,1,""],get_source_coordinates:[30,2,1,""],keys:[30,3,1,""],source:[30,3,1,""]},"podpac.datalib.smap.SMAPProperties":{get_native_coordinates:[30,2,1,""]},"podpac.datalib.smap.SMAPSource":{get_available_times:[30,2,1,""],get_data:[30,2,1,""],get_native_coordinates:[30,2,1,""],latkey:[30,3,1,""],lonkey:[30,3,1,""],product:[30,3,1,""],version:[30,3,1,""]},podpac:{settings:[22,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:function"},terms:{"3rd":1,"5th":5,"abstract":4,"boolean":[5,6,18,24,30,34],"break":[8,14],"byte":4,"case":[0,1,14,18,24,28,29,30],"class":[1,2,4,5,8,16,17,18,19,20,21,23,24,25,26,28,29,30,32,33],"default":[1,4,5,6,7,8,13,14,18,20,24,26,28,29,30,33],"enum":[5,6],"export":7,"final":[10,20,26],"float":[5,20,26,30,31,33],"function":[1,2,4,6,8,14,16,20,26,28,29,30,31],"import":[4,8,11,29,30,32,34],"int":[1,5,6,7,8,18,24,30],"long":[1,7,8,18,24],"new":[1,5,6,8,13,18,24,25,30,33],"return":[1,4,5,6,8,18,19,20,23,24,25,26,28,29,30,34],"static":[3,4],"throw":8,"true":[4,5,6,8,18,20,24,26,29,30,33,34],"try":[1,13,30],"var":1,"while":[1,4],AWS:[2,4,8,12,13,14,36],Adding:1,And:[1,3,5],But:4,CRS:[5,7],For:[0,1,4,5,8,13,14,18,24,28,30,31,32,33,34],GIS:1,IDE:1,Not:11,The:[0,1,2,3,4,5,6,7,8,11,12,13,14,18,20,24,26,29,30,31,33,34],Then:[3,13,32],There:[1,8,36],These:[1,6,13,30,31,34],Use:12,Used:[7,8,25,30],Uses:[4,30],Using:[4,6,32],WCS:[6,11],With:23,__add__:7,__doc__:29,__init__:[1,7,17,18,19,20,21],_ca:5,_ca_lat:5,_cache_mod:4,_cu:5,_cu_lat:5,_cu_lon:5,_cu_tim:5,_definit:7,_filter_udims_support:25,_get_data:6,_interpol:6,_interpolate_requested_coordin:6,_output:[8,20,26],_output_coordin:8,_requested_coordin:[6,8,20,26],_requested_source_coordin:6,_requested_source_coordinates_index:6,_requested_source_data:6,_stack:5,_static:3,_templat:3,_update_dataset:6,abil:[4,36],abl:[4,8,33],about:[1,4,8,25],abov:[1,4,5,6,8],absolut:13,abss:4,academ:36,accept:1,access:[1,2,4,6,11,12,13,14,23,30,32,36],accomplish:4,accord:0,accordingli:0,account:[4,11,36],accur:21,across:[4,7,30,36],act:7,activ:[8,13,36],activate_podpac_conda_env:13,actor:4,actual:[1,18,24],adapt:1,add:[1,3,4,5,6,8,9,10,14,30],adding:4,addit:[1,4,5,13,20,25,26,31,32,33],addition:8,address:[0,23,36],adher:1,advanc:[1,36],affect:4,after:[4,6,7,8,13,18,20,24,25,26,30,31],aftward:6,agenc:36,aim:36,aka:4,alglib:[1,2],algorithm:[1,2,4,8,11,12,13,20,26,36],align:5,all:[0,1,3,4,5,6,7,8,11,13,16,18,20,24,25,26,30,31],all_cach:[20,26],alloc:[8,18,20,24,26],allow:[4,5,6,14,18,24,31],allow_non:[6,28,33],allow_pickl:34,along:34,alongsid:13,alreadi:[1,8,13,20,26],also:[0,1,4,5,13,18,20,24,26,31,33,34,36],alt:[5,8,31],alter:0,altern:4,alwai:[1,4,8,31],amazon:[0,36],america:4,amongst:[18,24],ams2018:35,anaconda:13,analys:36,analysi:[4,12,30,36],analyt:36,analyz:8,ani:[0,1,4,6,7,8,18,20,24,25,26,30],anonym:1,anoth:[5,34],api:[3,12],app:32,appear:[19,24],append:14,appli:[4,6,7],applic:32,approach:36,appropri:[6,7,13],approv:32,arang:[5,31],arbitrari:[5,6],architectur:[12,36],archiv:[4,32,36],area:5,area_bound:5,arg:[4,7,21],argument:[4,20,25,26,31,34],arithmet:34,arrai:[1,4,5,6,7,8,18,20,24,26,28,30,31,33],array1d:5,array2d:5,array_lik:1,arraycoordin:5,arraycoordinates1d:31,arraysourc:6,artifact:1,aspect:36,assign:7,associ:[6,8,30,34],assum:[0,1,4,13,30],attent:30,attr:[6,8,20,26,28,29,33,34],attribut:[5,6,14,17,18,19,20,21,23,24,26],auth:23,auth_class:30,auth_host:[17,23],auth_sess:[30,32],authent:[30,32],author:[8,32],auto:[1,3],autobuild:3,autodoc:3,autodoc_default_flag:15,autodocstr:1,autogen:[3,15],autogener:[15,16],autom:14,automat:[3,6,8,13,14,15,18,24,31,32,36],avail:[1,4,5,8,18,20,24,25,26,29,30,33,36],available_interpol:25,avoid:1,awar:[18,19,20,24,26],aws:[0,8,13],awscli:13,back:[1,4,6,30],backblaz:6,backward:14,badexcept:1,balanc:4,band:[6,8],bar:29,barrier:36,base64:28,base:[0,2,5,6,7,8,18,19,20,24,26,30,33,34,36],base_definit:[18,20,24,26,30],base_ref:[20,26,30],base_url:30,basic:[4,6,34],bass:4,bat:13,beautifulsoup4:13,becaus:[1,8,11,18,24],becom:[4,6],been:[7,20,26],befor:[7,8,34],behav:[5,14],behavior:34,behaviour:8,being:[1,30],below:[1,4,8,13,15,31,34],benefit:[1,36],best:30,better:4,between:[7,30],bilinear:7,bin:13,binari:4,bleed:13,bool:[4,5,8,18,20,22,24,26,29,30,34],both:[1,30,31,36],boto3:13,bottleneck:4,bottom:[6,32],bound:[5,6,8,31],boundari:7,box:[0,5],bracket:1,branch:[1,13],broadcast:8,browser:[3,13],bucket:[0,4,6,13],bug:1,build:[0,13],builtin:34,button:32,cach:[3,4,14,18,20,24,26,30],cache_cir:1,cache_dir:[20,26],cache_native_coordin:[18,24,30],cache_obj:[20,26],cache_path:[20,26],cache_to_s3:22,cache_typ:[4,20,26],cached_properti:29,cacheerror:[4,8],cachei:4,cachin:8,cachstor:4,calcul:[4,5,8,18,24],california:4,call:[4,6,8,20,26,29,30],caller:4,came:8,can:[0,1,4,5,6,7,8,11,12,13,20,25,26,30,31,32,33,34],can_interpol:25,can_select:25,cannot:[8,30],capabl:36,captur:2,care:4,cast:[5,30],categori:4,cell_elev:30,cell_land_fract:30,central:4,certain:[5,13],certiain:5,cfg:1,cfloat:7,chang:[1,3,4,5,6,8,18,24,29],channel:13,check:[1,4,6,7,8,20,26,30],checkout:[1,13],cherri:16,child:[6,7,8,20,26,32],children:[8,18,24],choic:1,choos:30,chosen:0,cint:6,cite:1,clean:13,clear:[4,8,20,26],clear_cach:29,clear_disk_cach:[20,26],click:[13,32],client:1,clim:21,clinspac:31,close:[13,36],cloud:[2,6,8,12,20,26,36],clsm_cdcr1:30,clsm_cdcr2:30,clsm_dzgt1:30,clsm_dzgt2:30,clsm_dzgt3:30,clsm_dzgt4:30,clsm_dzgt5:30,clsm_dzgt6:30,clsm_dzpr:30,clsm_dzrz:30,clsm_dzsf:30,clsm_dztsurf:30,clsm_poro:30,clsm_wp:30,cluster:4,cmap:21,code:[0,3,8,13,20,26,32,36],collabor:[12,36],collect:4,colormap:[28,34],com:[13,23],combin:[12,19,24,31],come:[7,13],command:[1,13],commandlin:12,comment:1,commerci:36,commit:1,common:[5,8,18,20,24,26],common_doc:[1,29],common_parameters_listed_abov:1,commond:29,commun:[1,4,14,36],compat:[1,14,30],complet:[8,18,24],complex:[1,4,8,36],complic:[6,7],composit:[8,12,18,19,24,34],compositor:[1,8,20,26,30],comput:[1,4,12,13,30,36],concat:5,concaten:5,concret:4,concurr:4,conda:[3,12],conf:3,config:[15,28],configur:[1,3,7],confirm:25,conjunct:4,consid:[5,7],consist:[1,8],consol:[0,13],constant:8,construct:[8,18,24,25,30],constructor:6,contain:[0,1,2,5,6,8,18,19,20,24,26,30,31],contribut:[12,14],control:1,contruct:6,conveni:[0,30,31,32],convent:6,convert:[1,3,30,31],convienc:[3,25],convolut:14,coodin:5,coodrin:6,coord:[4,5,8,11,20,26,28,31,33],coord_list:[20,26],coord_nam:34,coord_ref_si:5,coorddata:34,coordiant:8,coordin:[1,4,6,7,10,11,12,14,18,20,24,25,26,30],coordinate1d:8,coordinate_index:30,coordinate_index_typ:[6,30],coordinateerror:8,coordinates_hash:[20,26],coordinates_index:[6,30],coordinatesgroup:[20,26],coordint:5,coords1d:5,coords_copi:5,coords_list:[18,24],coorind:1,copi:[0,3,5,13],core:[1,2,4,5,6,8,13,30,32,33,34],correct:[1,8,18,20,24,26,30],correctli:13,correspond:[30,31],cost:[4,7,8],cost_func:7,cost_setup:7,could:[1,4,5,7,8,16,18,24,30],cov:1,cover:30,coverag:14,coveral:1,crang:31,crear:13,creat:[1,4,5,6,7,8,11,12,20,25,26,31,33],create_output_arrai:[20,26,30],creation:14,creator:8,credenti:[13,30],creep:1,ctype:[5,31],current:[7,8,13,20,25,26,36],custom:[1,7,8,13,14,25],dai:[18,24],daraarrai:30,dask:[4,14,36],data:[1,2,4,5,6,7,8,10,11,12,13,14,18,20,23,24,26,28,30,31,33,34,36],dataarrai:[5,18,19,20,24,26,28,30],dataarraycoordin:5,databas:4,datafram:4,datakei:30,datalib:[1,2,11,34],dataset:[6,7,8,30,32],datasourc:[1,4,7,8,14,18,20,24,25,26,30],datatyp:[13,20,26],date:[10,30],date_file_url_r:30,date_time_file_url_r:30,date_time_url_r:30,date_url_r:30,datetim:[4,31],datetime64:[5,30,31],deal:[30,36],debug:[4,8,20,26],decid:[1,7],decor:29,def:[1,4,6,8,34],default_ctyp:5,default_distance_unit:5,default_valu:[28,33],defin:[1,4,5,6,7,8,18,20,24,25,26,29,30,31,33,34],definit:[0,4,6,7,14,20,25,26,30,33],definition_return:[20,26],definiton:25,defint:[18,24],degre:[30,36],del_cach:[8,20,26],delet:[4,8,20,26],delta:5,demo:10,demonstr:2,deped:[4,8],depend:[4,5,6,8,20,26,30],deploi:36,deploy:2,deprec:[20,26],deriv:[8,18,24],describ:[1,5,13,18,24,30,33,34],descript:[1,17,18,19,21,22,23,24,25,28,29,30],design:[12,33],desir:[8,13,18,20,24,26],destin:34,detail:[1,5,25,30,32,33],detect:3,determin:[4,6,18,24,29],dev:13,deval:13,develop:[0,11,12,14,18,24,36],developerspec:33,dict:[5,6,7,8,20,25,26,29,30,31],dictioari:[20,26],dictionari:[4,5,6,8,18,20,24,26,29,34],differ:[4,5,7,8,30,36],difficult:13,dill:4,dim:[5,6,7,8,28,31],dimens:[6,7,8,14,18,20,24,25,26,30,31],dimension:[5,8],dims_support:25,dir:[1,8],direct:15,directli:[0,5,36],directori:[0,1,2,3,4,8,13,20,26],disciplin:1,discrib:[20,26],disjoint:36,disk:[4,8,20,26,30],diskstor:4,dispar:36,displai:[20,23,26],dist:[0,2,13],distribut:[0,3,4,13,36],dlat:[5,6],dlon:[5,6],doc:[2,3,13],doc_dict:29,docker:0,dockerfil:0,dockerhub:0,docstr:[3,29],doctest:[1,3],doctr:[14,29],document:[1,2,6,8,12,14,15,16,33],doe:[1,4,6,7,29,30],doesn:[4,6,8],dof:7,domain:[1,2],don:6,done:[1,8],doubl:13,down:[7,18,24],download:13,downsampl:5,downscaled_sm:34,downselect:25,driven:4,drop:[1,5,8,25],dtype:[5,20,26,30,31],due:36,duplic:8,dure:[3,14,25],each:[3,5,6,7,8,14,18,20,24,25,26,30,31,32,33,34],earth:[11,12,30,36],earthdata:[13,23,30],earthdatasess:[23,30,32],eas:5,easi:[4,36],easier:[1,16],ec2:0,edg:[7,13],editor:1,eds:32,effici:30,either:[1,4,5,31,32],element:[5,6,25],empti:[5,20,26,30],enabl:[13,14,32,36],encod:[0,28],encompass:36,encount:13,encourag:[0,1],end:[5,8,14],endpoint:14,enhanc:31,enter:[3,13,32],entir:[4,8,20,26],entri:[3,13],enumeration_color:21,enumeration_legend:21,environ:[0,2,12],environment:1,eosdi:36,eqn:34,equal:7,equival:[5,31,34],error:7,esa:36,especi:[18,24],esri:13,essenti:[2,8,30],estim:8,etc:[1,3,5,8,31],eval:[6,18,20,24,26],eval_coordin:25,eval_group:[20,26],evalu:[4,6,8,14,18,19,20,24,25,26,30,31],evaluated_coordin:8,even:[1,5,6],event:0,everi:[5,6,18,24,30,32],everyth:[14,18,20,24,26],exact:31,exactli:[5,6],examin:8,exampl:[0,1,2,12,18,23,24,29,30,31,32,34],exce:36,excel:36,except:[5,6,7,8,25,26],exe:13,execut:[0,4,6,8,11,13,14,25,33,34,36],exist:[6,20,26,29,36],expand:14,expect:[0,7,30,33],expens:8,experi:13,expert:1,expertis:36,expir:[4,14],explan:1,explicit:5,explicitli:5,exploit:36,explor:36,expos:1,express:30,ext:[20,26],extend:[1,4,6,20,26],extent:[5,7,8],extra:25,extract:[0,13,30],extrem:31,face:1,facilit:[5,12],fact:[4,36],fail:1,fairli:1,fall:[4,5,31],fallback:5,fals:[5,6,18,20,24,26,28,29,30,33,34],famili:30,faster:[18,24],fastpath:28,featur:[1,8],feet:5,few:[6,8,18,24],field:[0,8,29],fifthfunc:1,figur:[4,7],file:[0,1,3,4,6,8,13,17,20,26,30,32],file_url_r:30,file_url_re2:30,filenam:[8,20,26,30],filepath:6,filesystem:4,fill:[5,18,24,30],fillval:[20,26],find:[8,30,32],find_coordin:[18,20,24,26,30],first:[1,4,6,8,13,18,24,25,30],fix:[6,14],fix_hardcoded_absolute_path:13,fix_import:34,flag:[18,24],flat:6,float64:8,flop:7,fmt:[20,26],focu:[12,28],folder:[4,13,30],folder_d:30,follow:[0,1,2,3,4,5,6,8,11,13,14,31,32],foo:29,foot:8,forc:4,forecast:4,forg:13,fork:1,form:[0,31],format:[1,3,6,8,14,20,26,28,29,30,34,36],formula:4,found:[8,11,20,26,33,34],fourthfunc:1,framework:36,frequenc:4,friendli:[0,4],from:[0,1,3,4,5,6,7,8,13,17,20,23,25,26,30,31,32,34,36],from_pipelin:7,from_tupl:5,from_xarrai:5,full:[1,13,15,20,26,34],func:29,further:30,fusion:36,futur:[4,6,8,20,26],fuzzi:1,gener:[1,2,3,4,7,11,14,19,24,28,30,31],geodet:5,geograph:8,geohash:4,geopanda:36,geoscienc:1,geoserv:6,geospati:[4,7,12,14,36],geotif:34,geotiff:[4,6],gesdic:32,get:[1,4,5,6,7,8,10,12,18,20,23,24,26,30],get_available_coords_sourc:30,get_available_tim:30,get_available_times_d:30,get_cach:[8,20,26],get_data:[6,7,30],get_filename_coordinates_sourc:30,get_imag:28,get_native_coordin:[6,30],get_settings_fil:29,get_shared_coordin:[18,24,30],get_source_coordin:[18,24,30],git:[1,13,14],github:[1,12,13],give:[5,8,19,24,30],given:[4,5,6,8,20,26,30],global:30,goal:1,goe:1,going:[1,6],gov:23,graph:4,greatli:36,greek:1,grei:8,grid:[5,30,31],group:[1,8,14,20,26],groupcoordin:8,guarante:14,guarente:6,guid:12,h5py:13,habitat:1,haggi:1,handl:[0,4,7,8,13,14,25,28,33],handler:0,hard:[4,18,24],has:[4,7,8,18,20,24,25,26,31],has_cach:[4,8,20,26],hash:[4,14],have:[1,4,5,7,8,13,18,20,24,26,28,30,32],hdd:4,hdf5:4,hdf:4,head:14,header:23,height:6,help:[1,14,21,28],helper:[8,20,26],here:[0,1,4,8,13],hierarch:1,high:[14,36],higher:1,highest:8,highland:1,highli:36,hinder:36,hit:13,hold:4,home:32,hood:5,host:23,hostname_regex:[17,23],hotfix:14,hour:[18,24],how:[1,3,5,7,8,14,20,23,26,30],howev:[0,4,36],html:[1,2,3],http:[3,13,23,30],huge:8,icon:13,ideal:4,idempot:4,identifi:14,ignor:[4,5,20,26],ignore_miss:5,illustr:1,imag:[2,3,28],imageri:8,implement:[1,2,5,6,7,8,14,18,20,24,25,26,30,33,36],improv:[13,14],inabl:8,includ:[0,1,2,3,4,5,6,7,13,14,18,20,24,26,30,31,33,34],incomplet:[14,18,24,30],inconsist:[8,30],incorpor:[1,36],incorrect:14,increas:14,independ:[4,8,20,26],index:[3,5,8,18,24,25,30],indic:[8,18,24,30],indici:25,individu:[5,8],info_text:28,inform:[4,6,8,18,24,25,36],inherit:[4,30],init:[7,20,25,26],initi:[8,20,21,25,26],initialize_output_arrai:8,initialz:8,inlin:1,input:[1,3,4,5,6,7,8,14,18,20,24,26,30,31,34],inspect:8,instal:[0,2,12],instanc:[0,4,6,8,20,26,30],instanti:[6,8,33],instead:[6,8,13,29],institut:36,instruct:[2,12,32],int32:8,integ:[5,31],integr:[14,36],intent:13,interact:[4,8,32],interest:32,interfac:[1,5,14,18,20,24,26,33,36],intermedi:4,intern:[1,11],interopl:7,interpol:[4,6,8,12,14,18,24],interpolation_default:7,interpolation_method:7,interpolation_shortcut:7,interpolationexcept:25,interpolationmethod:7,interpolator_attribut:25,interpolator_can_interpol:25,interpolator_can_select:25,interpolator_interpol:25,interpolator_select:25,interpret:[3,6,31],intersect:[5,6,25],interv:4,invalid:[20,26],investig:[29,36],invoc:14,involv:4,ipykernel:13,ipyleaflet:13,ipympl:13,ipython:13,ipywidget:13,irregularli:5,is_descend:5,is_enumer:21,is_monoton:5,is_source_coordinates_complet:[18,24],is_uniform:5,issu:[1,13,14,32],itd:0,item:[5,8,31],iter:5,iterchunk:5,iteroutput:[18,24],its:[0,4,5,6,8,13,18,20,24,26,31,34],itself:7,javascript:8,job:8,join:5,json:[0,4,8,20,26,32,34],jupyt:[2,11,13],jupyterlab:13,just:[4,5,6,8,13,31],kappa:34,keep:[1,4,13,23],kei:[4,5,6,8,17,20,26,29,30,31],keyerror:5,keyword:[20,25,26],kilomet:8,kind:[4,6],klepto:4,know:[4,7,30,33],known:14,krige:[1,25],kwarg:[4,7,18,19,20,21,24,25,26,28,30],lab:13,label:[5,25,31],labextens:13,lambda:[4,12,14],larg:31,larger:8,largest:8,last:[8,34],lat:[5,6,7,8,10,11,30,31],lat_lon:[5,8,31],lat_lon_tim:8,late:3,later:34,latest:[0,13],latest_vers:30,latex:3,latitud:[30,31],latkei:30,latlon_delta:30,latlon_url_r:30,launch:13,layer:30,layerkei:30,leaflet:13,lean:1,learn:36,least:4,leav:6,left:[5,6,7],len:5,less:0,let:13,level:[1,30,31,34],lfu:4,librari:[1,2,4,11,13,23,33,34,36],light:[20,26],like:[0,1,4,5,20,26,28,31],likewis:28,limit:[2,4,6,16,18,24],line:[1,5],link:0,linspac:[5,31],linux:[13,32],list:[1,4,5,6,7,8,18,20,24,25,26,30,31,34],literatur:1,live:[3,8],load:[4,6,17,20,26],load_cached_obj:[20,26],load_set:29,local:[4,6,8,13,36],local_windows_instal:13,locat:[4,6,18,24],log:32,logic:1,login:[13,30],lon:[5,6,7,8,10,11,30,31],long_var_nam:1,longitud:[30,31],lonkei:30,look:[1,4,8],lookup:4,loop:8,low:[18,24],lru:4,lxml:13,mac:[3,13],machin:[13,36],mactex:3,mai:[1,2,4,5,7,8,13,18,24,30,32,33,34],mainli:4,maintain:1,major:[14,36],make:[1,3,4,16,18,24,30],manag:[4,8,13],mani:[1,18,24,30,36],mantain:23,manual:3,map:[4,5,30],mark:1,markdown:3,marker:1,mask:28,master:13,match:[4,6,8,30],math:1,mathemat:8,matplotlib:13,matter:7,matur:[1,4],max:[5,14,34],maxim:36,maximum:28,mayb:[4,8],mcnoleg:1,mean:[1,30],mechan:[6,8,14,20,26],medium:4,member:[15,16],memcach:4,memeb:6,memori:[4,8,18,20,24,26,34],menu:13,metadata:8,meter:8,meth:30,method:[1,16,17,18,19,20,21,24,25,26,29,30,32,34],metpi:36,midpoint:[5,31],migrat:36,miktex:3,mile:8,min:[3,5,34],mind:4,miniconda:13,minim:[3,7,36],minimum:28,minor:14,minut:[18,24],miss:[1,5,8,25],mix:31,mode:[4,5,13,34],model:[1,4,31,36],modic:6,modif:1,modifi:[1,5,14,23],modul:[1,6,15,20,26,28,29,34],module_nam:29,moistur:30,moment:13,mongodb:4,monitor:1,monoton:[5,14],month:[18,24],more:[1,3,4,5,6,7,13,19,24,25,30,32],moreov:36,most:[1,7,20,26,30],motiv:30,move:14,mpi:4,mru:4,much:[18,24],multi:[4,5,8,36],multidimension:31,multiindex:[5,31],multipl:[1,4,5,7,8,18,24,30,31],multiprocess:4,multiprocessor:4,multiscal:36,multitud:36,must:[1,6,7,8,18,24,30,34],mwrtm_bh:30,mwrtm_bv:30,mwrtm_clai:30,mwrtm_lewt:30,mwrtm_omega:30,mwrtm_poro:30,mwrtm_rghhmax:30,mwrtm_rghhmin:30,mwrtm_rghnrh:30,mwrtm_rghnrv:30,mwrtm_rghpolmix:30,mwrtm_rghwmax:30,mwrtm_rghwmin:30,mwrtm_sand:30,mwrtm_soilcl:30,mwrtm_vegcl:30,mwrtm_wangwp:30,mwrtm_wangwt:30,my_attr1:33,my_attr2:33,my_new_featur:1,my_pipeline_output:34,my_plugin:34,mycompositor:34,mycustomnod:34,mydatasourc:[33,34],myinterpol:7,mykei:[4,8],mymodul:34,mynod:34,mynode1:34,mynode2:34,myothernod:34,myotherpipelin:34,myplugin:34,myresult:34,mythirdnod:34,n_thread:[18,24],nad87:5,name:[0,1,5,6,7,18,20,21,24,26,28,29,30,31,34],namespac:1,nan:[6,8,19,20,24,26,30],nan_val:[6,30],nasa:[4,6,11,12,13,18,23,24,36],nativ:[5,6,7,8,10,18,20,24,26,30],native_coordin:[6,8,18,24,30],nbextens:13,ndarrai:[1,6,18,24,28,30],ndim:[5,31],nearest:[6,7,25],nearest_neighbor_attribut:25,nearestneighbor:25,nearestpreview:25,necessari:[5,36],necessarili:7,need:[0,1,3,4,5,6,7,8,13,18,20,24,25,26,30,32,33],neglect:4,neighbor:25,nest:1,network:[1,4],neural:1,new_dim:28,newfunc:1,newli:8,no_data_v:6,node:[0,1,2,4,6,8,11,12,13,14,18,19,24,25,30,31,32],node_address0:8,node_address1:8,node_address2:8,node_cach:[20,26],node_default:[20,26],node_hash:[20,26],node_kei:8,nodeexcept:[20,26],nodej:13,non:[1,18,24,30,36],none:[4,5,6,7,14,17,18,19,20,21,23,24,26,28,29,30],north:4,note:[1,8,11,13,18,20,24,26,30,31,32],notebook:[2,11,33],notimpl:7,notimplementederror:[6,8,18,20,24,26,30],now:[0,1,28,33],np2smap_dat:30,npy:34,npyoutput:34,nsidc:[30,32],nsidc_datapool_op:32,number:[1,4,8,13,20,26,28,30,31,34],numer:5,numexpr:13,numpi:[1,4,6,8,13,18,20,24,26,30,31,34],obei:8,obj:[4,20,26,28,29],object:[1,4,5,8,14,18,20,24,26,29,30,34],observ:[6,12,36],occur:36,older:13,omega:1,omit:[20,26,34],onc:[18,19,24,32],one:[1,3,4,5,6,8,25,31],ones:[8,20,26],onli:[1,4,5,7,8,13,20,26,30],only_seldom_used_keyword:1,onto:13,open:[6,13,36],open_dataset:6,opendap:[30,32],opendap_url:32,opendatacub:36,oper:[4,7,8,13],oppos:[5,18,24],optim:[7,18,24],optimalinterpol:25,option:[1,3,4,5,7,8,13,15,16,17,18,19,20,23,24,26,28,29,30,33,34],optional_import:29,order:[4,6,7,8,19,24,30,31,36],orderedcompositor:[24,34],ordereddict:[8,18,20,24,26],organ:[1,7],orient:1,origin:[4,13],other:[0,1,3,4,5,6,8,12,13,14,34],otherfunc:1,otherwis:[5,6,8,18,24,29,30,31],ouput:8,our:[0,1,13,32,36],out:[0,1,4,7],outdir:[20,26,34],outer:5,outlin:3,output:[1,4,6,7,14,18,19,20,24,25,26,28,30,33],output_data:25,outputdata:34,outsid:5,over:[3,4,5,8,10],overid:7,overlap:[7,30],overrid:[4,7,16,23],overriden:4,overwrit:[5,6,8,18,19,20,25,26],own:[4,6,8,18,20,24,26,33],packag:[0,1,3,4,5,13,29],page:[2,3,32],pai:30,pair:[7,31],panda:[5,6],pangeo:36,paragraph:1,parallel:[4,8,14,36],param:[14,34],paramet:[1,4,8,17,18,19,20,23,24,25,26,28,29,30,34],parameter:5,paramt:4,pars:5,part:[5,8,18,24,32,33],part_transpos:28,parti:1,partial:30,particular:[2,4,8,10,13,14,28,30,33],particularli:31,pass:[1,6,7,8,18,20,24,25,26,30],password:[17,23,30,32],past:[0,13],path:[1,8,13,20,26,29,34],patho:4,pattern:4,pdflatex:3,pep8:1,per:25,perform:4,perman:[20,26],perpsect:7,petabyt:36,physic:5,pick:16,pickl:[4,20,26,34],pint:[13,20,26],pip:[3,13],pipe:4,pipelin:[0,1,4,6,7,8,11,12,14,20,26,33,36],pipeline_dict:8,pipeline_json:8,pipeline_nod:8,pipeline_rich:8,pipelinenod:8,place:[5,14],plain:[23,32],plan:[13,20,26],platform:13,plugin:[1,13,18,24,34],png:[28,34],podaac:5,podac:1,podpac:[1,2,3,4,5,6,8,11,14,31,34,35],point:[1,5,7,8,13,14,18,24,25,30,31],poros:30,portion:[4,8],possibl:[1,4,7,11,28],potenti:[8,14],power:36,pre:[18,24],predict:4,prefix:[20,26],prepared_request:23,prepend:[4,30,34],present:[1,8,29,30],preserv:5,press:3,pretti:4,preview:25,previou:4,previous:8,primari:[1,7,8,20,26],primarili:30,print:1,priorit:[4,14],prioriti:[4,7,14],privat:25,problem:13,procedur:13,process:[1,4,6,8,12,13,14,25,30,31,33,36],produc:8,product:[11,12,18,24,30,36],profil:32,program:36,project:[1,7,12],promot:14,prompt:[13,32],properli:[1,8],properti:[0,4,8,20,26,29,30],protocol:[4,36],proven:8,provid:[1,4,6,8,30,31,32,34],pull:1,purpos:4,put:[4,8],put_cach:[8,20,26],pydap:[13,32],pydap_nod:32,pylint:1,pylintrc:1,pytest:1,python:[0,1,2,3,4,7,13,23,31,32,36],quantiti:8,queri:4,quick:[6,12],quickli:6,radial:25,rais:[1,4,5,6,7,8,18,20,24,25,26,30],ram:[4,20,26],rand:6,random:6,rang:[5,31],rare:1,rasterio:[13,25,36],rasterio_interpol:25,rasteriosourc:6,rather:31,raw:4,reach:13,read:[3,5,6,30],read_onli:28,readi:32,reason:4,rebuild:3,rebuild_auth:23,rebuilt:3,recenc:4,recent:[20,26],recommend:13,recommonmark:3,record:[1,14],redi:4,redirect:23,redon:4,reduct:4,ref:[6,25],refactor:[8,14],refer:[1,5,12,20,26],referenc:[1,14,34],region:[8,10,30],regist:[13,32],registr:32,registri:[20,26],regular:30,regularli:[5,30],reject:1,rel:[18,24,29,34],relat:[0,12,30,31],relationship:1,releas:[13,14],relev:1,reload:3,rem:4,remain:14,remot:[1,8],remov:[5,6,8,20,26,36],repeat:30,replac:[5,6,20,26,29,30,34],report:[1,8],repositori:[1,36],repres:[4,5,31],reproduc:[4,8],reproject:14,request:[1,4,5,6,7,8,13,14,18,19,20,23,24,25,26,30],requested_coordin:[6,7,20,26],requested_data:7,requested_source_coordin:6,requested_source_coordinates_index:6,requested_source_data:6,requir:[11,18,24,30,31,32,34,36],requr:8,requst:8,reserv:4,resolut:[4,5,8,30,36],resourc:[4,8,30,36],respect:4,respond:4,respons:23,restrict:[4,8,31],result:[0,4,5,8,18,19,20,24,26,34],rethink:14,retreiv:[20,26],retriev:[4,8,11,20,26,30,31,32,36],return_root:29,reusabl:36,review:1,rgba1:8,rgba2:8,rgba:8,rich:8,right:[5,6],rigth:5,roadmap:[1,12],robust:4,root:[1,3,4,29],root_fold:13,root_path:22,rootdatakei:30,rotat:5,rough:7,routin:36,rpc:4,rst:3,rtd:3,rule:[8,18,24],run:[0,1,3,4,6,7,20,26,32],run_podpac_jupyterlab:13,runtim:8,runtimeerror:30,s3_bucket_nam:22,safe:5,safest:8,same:[4,5,6,7,8,18,24,30,31],sandbox:4,save:[4,8,34],save_set:29,scalabl:36,scienc:[12,36],scientif:[2,36],scientist:[12,36],scipi:[13,25],scipygrid:25,scipypoint:25,screen:32,script:[3,13,32],scroll:32,seamless:12,seamlessli:36,search:8,second:[1,6,13,18,24,25],section:[1,3,13,14],secur:32,see:[1,3,6,7,8,11,13,21,25,30,31,33,34],seem:[18,24],segment:[5,7],select:[5,7,8,13,25],select_coordin:[7,25],self:[1,4,5,6,7,8,17,19,21,24,25,29,30,34],sens:1,sentenc:1,sentinel:30,separ:8,seper:1,serial:[4,8],serv:[3,4,6,20,26],server:[0,3,4,6,18,24,30],serverless:4,servic:[0,20,26,36],servis:4,session:[13,23,30,32],sessionwithheaderredirect:23,set:[0,1,4,5,6,7,8,13,17,18,20,24,25,26,28,30,33,34,36],set_local_conda_path:13,setup:1,sever:[1,4,34],shape:[5,14,31],shard:4,share:[4,8,12,18,20,24,26,30,36],shared_coordin:[18,24],shell:4,shortcut:[5,6,7,8],should:[1,4,5,6,7,8,12,13,14,20,25,26,30,32,33,34],shouldn:1,signatur:21,silent:14,similar:[5,8,31],simpl:[4,6,7,33],simpler:13,simpli:3,simplifi:36,simultan:[18,24],sinc:7,sing:5,singl:[1,4,5,7,28,30,31],singleton:5,site:30,size:[4,5,6,7,8,14,20,26,31],slice:[5,6,30],slightli:16,slower:[18,24],small:[1,18,24],smap2np_dat:30,smap:[2,4,10,11,34],smap_base_url:30,smap_incomplete_source_coordin:30,smap_l4_sm_lmc_00000000t000000_vv:30,smap_product_dict:30,smap_product_map:[11,30],smap_product_opt:11,smapbestavail:30,smapdatefold:30,smapporos:30,smapproperti:30,smapsourc:30,smapwilt:30,softwar:[1,36],soil:30,sole:30,some:[1,4,5,6,8,13,30,31,33],someth:4,somewhat:13,sort:8,sortbi:8,soruc:7,sourc:[1,2,3,6,7,8,11,12,13,17,18,19,20,21,23,24,25,26,28,29,30,31,32,33,34,36],source_coordaint:25,source_coordin:[6,7,18,24,25,30],source_coordinates_idx:7,source_coordinates_index:[7,25],source_data:[7,25],sourcea:34,sourceb:34,sourcec:34,space:[5,30],span:8,spatial:30,spec:[6,8,9],speci:6,special:30,specif:[1,2,14,16,20,26,30,36],specifi:[1,4,5,6,7,8,14,16,20,25,26,30],spectral:8,sphinx:[2,3,15],sphinx_rtd_them:3,spl4smlm:30,split:5,sql:4,sre_pattern:30,ssd:4,ssh:4,stabl:13,stack:[5,6,7,8,30],stackedcoordin:31,stage:[8,32],standard:[8,20,25,26,36],start:[4,5,8,12,13,31],startpoint:14,state:4,statu:1,step:[0,5,7,31],still:8,stop:[0,3,5,8,18,24,31],stop_typ:8,storag:[4,36],store:[4,6,8,18,20,24,26,30,32,36],stori:10,str:[4,5,6,7,8,17,18,20,23,24,25,26,28,29,30],strict:1,stride:30,string:[4,5,6,7,8,23,30,31,34],structur:[1,2,4],style:[3,4,8,20,26],sub:[5,14],subclass:[6,7,20,26,30,33,34],subject:4,sublim:1,submodul:[1,34],subselect:[18,24],subset:[4,8,12,18,24,25,30],summari:[1,17,18,21,22,23,24,26,28,29,30],superced:8,suppli:[6,8,18,20,24,26,34],support:[3,4,5,7,8,13,14,20,25,26,31,36],sure:[4,5],symbol:1,syntax:1,system:[1,4,5,7,13,30,32,36],t18:5,tab:13,tabl:4,tabular:6,tag:[0,6,13,14,18,24],take:[4,6,8,18,24],target:14,task:36,tbd:[33,35],tcp:4,techniqu:1,technolog:4,templat:[3,30],tempor:[7,8,30],terabyt:36,test:14,test_funct:1,test_method:1,testclass:1,tex:3,text:[1,8,23,32],than:[1,4,13,18,24,31],thei:[4,14,19,24,34],theme:3,thespian:4,thi:[0,1,2,4,5,6,7,8,13,14,16,18,19,20,24,25,26,30,31,32,33],think:[4,8],third:[25,31],thirdfunc:1,those:[1,8],though:[20,26],thread:[18,24],three:[31,34],through:[7,8,13,14,32,36],thu:36,tick:1,tie:8,tier:4,ties:8,tight:1,tighter:14,tile:30,time:[3,4,5,6,7,8,11,18,24,30,31,32,34],timedelta64:5,timedelta:[5,31],timestamp:4,tmp:0,to_base_unit:28,to_pipelin:7,toc:3,toctre:15,todo:[4,5,6,7,9,10,31],togeth:[5,8,18,19,24,31],token:13,toler:7,tolist:11,tool:36,top:[1,6,13,34],toplevel:5,total:[4,31],track:[1,8],trait:29,trait_is_defin:29,traitlet:[4,8,13,14,28,33,34],transfer:28,transit:36,transport:[6,20,26],transpos:[5,14],treat:30,trigger:0,tsmtr:34,tunnel:4,tupl:[5,6,7,23,25,31],turn:6,two:[4,5,31],type:[1,4,5,6,7,8,13,18,20,21,22,23,24,25,26,28,29,30,32,34],type_without_descript:1,typeerror:25,typic:36,udim:[5,25],udp:4,udrop:5,ultim:1,undefin:28,under:[4,5,14,32],underli:[4,6,8,31,36],underneath:1,underscor:[5,31],underutil:36,unfortun:36,unicod:[5,6,7],unifi:36,uniform:5,uniformcoordin:14,uniformcoordinates1d:31,uniformli:5,union:5,uniqu:[18,20,24,26,30,33],unit:[1,4,5,8,14,18,19,20,21,24,25,26,30],unitdataarrai:[6,18,19,24,25],unitsdataarrai:[1,4,6,8,14,18,19,20,24,25,26,28,30],unitsnod:28,unless:[8,34],unlik:31,unstack:[5,6,7,8,25],until:[1,19,24],unzip:13,updat:[4,6,14,18,24,30],update_login:[23,32],upload:0,ureg:[1,4,8,20,26,28],uri:0,url:[13,30],usag:[7,14],use:[0,1,3,4,5,7,8,11,13,14,16,25,30,32,34,36],usecas:[4,9],used:[0,1,2,4,5,6,7,8,13,14,17,18,20,24,25,26,29,30,31,34],useful:[7,31,36],user:[1,3,10,12,18,20,24,26,30,32,33],usernam:[17,23,30,32],uses:[1,4,20,26,36],using:[0,1,3,4,5,6,8,11,13,15,17,18,20,24,26,28,30,31,32,34,35],usingnasa:30,usual:[28,32],util:[1,8],utm:5,valid:[5,7,25,28],valu:[1,4,5,6,7,18,19,20,24,25,26,28,29,30,31,33,34],valueerror:[20,26],var1:1,var2:1,vari:30,variabl:1,variant:[20,26],variat:30,varieti:34,variou:[2,8,13],vast:36,verifi:13,version:[4,13,20,26,30],via:[1,4,6,25,30,36],view:12,visit:3,visual:1,vmax:[28,34],vmin:[28,34],vol:1,wai:[1,5,8,31],want:[4,5,6,8,10,28],warn:[20,26],wealth:32,weather:4,web:[0,13,36],webpag:3,websit:[4,30],weight:[20,26],welcom:1,well:[18,24],were:[18,24],wgs84:5,what:[4,7,8,33],when:[0,1,4,5,6,7,8,13,14,18,20,23,24,25,26,30,33],where:[1,2,7,8,13,14,28,32,36],which:[0,1,4,6,7,8,13,18,20,24,26,30,31],whole:1,whose:30,why:12,wider:1,widespread:36,widget:[8,13],widgetsnbextens:13,width:6,wiki:23,wikipedia:4,wilt:30,window:[3,5,8,12,32,36],wire:7,within:[5,8,13,25,36],without:[1,6,8,29],work:[0,1,4,5,7,8,11,13],workflow:11,workstat:36,wors:4,would:[4,5],wrangl:12,wrap:[1,4,5,20,26,31],write:[0,1,13,20,26,33,34],written:[1,8],xarrai:[4,5,6,8,13,18,19,20,24,26,28,30,31,36],xcoord:5,year:[10,18,24],yes:1,yet:[20,26],yield:[18,24],you:[0,1,3,6,7,13,31,32,33,34],your:[1,13,30,32,33],zero:[20,26],zip:[0,5,13],zone:5},titles:["AWS Lambda","Contributing","Design","Documentation","Requirements","Requirements","Requirements","Requirements","Requirements","Requirements","&lt;no title&gt;","Examples","PODPAC","Installation Instructions","Roadmap","API Reference","API Quick Reference","podpac.core.authentication.EarthDataSession","podpac.core.compositor.Compositor","podpac.core.compositor.OrderedCompositor","podpac.core.node.Node","podpac.core.node.Style","podpac.settings","podpac.core.authentication","podpac.core.compositor","podpac.core.data.interpolate","podpac.core.node","podpac.core.pipeline","podpac.core.units","podpac.core.utils","podpac.datalib.smap","Coordinates","NASA Earth Data","Nodes","Pipelines","References","Why PODPAC?"],titleterms:{"abstract":7,"case":[4,5,6,7,8,9],"class":[6,7,34],"default":34,"function":[0,5],"import":1,"public":[1,4,8],AWS:0,One:5,Use:[4,5,6,7,8,9],account:32,addit:[8,34],advanc:[8,31],algorithm:[33,34],alias:5,altern:[5,31],api:[1,15,16,31],architectur:0,arraycoordinates1d:5,attribut:[4,8,22,25,28,30,33,34],authent:[16,17,23],basecoordinates1d:5,bug:14,build:3,cach:8,cachectrl:4,cachestor:4,clinspac:5,clone:13,code:1,commandlin:13,common:34,compositor:[18,19,24,33,34],conda:13,constant:7,constructor:[5,7,31],contribut:1,contructor:6,conveni:5,convent:1,convet:1,coordin:[5,8,15,31],coordinates1d:5,core:[15,16,17,18,19,20,21,23,24,25,26,27,28,29],coverag:1,crang:5,creat:[0,13,32],creation:[5,31],credenti:32,custom:[33,34],data:[15,25,32],datalib:30,datasourc:[6,33,34],definit:[8,34],depend:13,design:2,develop:[1,3,4,6,8,9,13],dimens:5,docstr:1,document:3,earth:32,earthdata:32,earthdatasess:17,environ:13,eval:8,eval_group:8,exampl:[4,5,6,7,8,9,11,13,33],extend:33,featur:14,file:34,find_coordin:8,gener:5,govern:1,group:31,group_coordin:8,imag:34,implement:4,init:8,instal:[3,13],instruct:13,integr:1,interfac:[4,6,7,8,9],interpol:[7,25],interpolatorexcept:7,introduct:33,lambda:0,lint:1,login:32,member:[6,7],method:[4,5,6,7,8],miscellan:5,motiv:32,multidemension:5,nasa:32,nearestneighbor:7,nearestpreview:7,node:[20,21,26,33,34],none:[8,34],note:[4,34],notebook:13,oper:[5,6],orderedcompositor:19,organ:3,other:36,output:[8,34],overview:31,own:0,paper:35,pdf:3,pipelin:[27,34],podpac:[0,12,13,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,36],present:35,privat:[4,6,7,8],problem:36,project:36,properti:[5,6,31],purpos:12,quick:16,rasterio:7,refer:[3,15,16,35],relat:36,repositori:13,requir:[4,5,6,7,8,9],roadmap:14,rotat:31,run:13,runtim:32,sampl:34,save:32,scheme:14,scipi:7,set:[16,22,32],shorthand:5,smap:30,sourc:15,space:31,specif:[4,5,6,7,8,9],stack:31,stackedcoordin:5,style:[1,21],tag:33,test:[1,3,8],todo:14,trait:[5,6,7],typic:8,uniformcoordinates1d:5,uniformli:31,unit:28,unstack:31,usag:31,user:[4,6,7,8,9,13],util:[7,29],version:14,websit:3,why:36,window:13,your:0}})