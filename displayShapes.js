/*YUI({filter:"raw"}).use('graphics', function (Y)
{
var mygraphic = new Y.Graphic({render:"#mygraphiccontainer"});
var myrect = mygraphic.addShape({
x: 0,
y: 0,
type: "rect",
stroke: {
color:"#90ad8c",
weight: 1,
opacity:0.8
},
fill: {
type: "linear",
rotation: 90,
stops: [
{color: "#90ad8c", opacity:0.3, offset: 0},
{color: "#819c7d", opacity: 0.3, offset: 0.8},
{color: "#40563d", opacity: 0.7, offset: 1.0}
]
},
width:870,
height:1000,
xy: [1000, 100]
});

});*/
var log=function(value){
    //console.log(value);
};
Function.prototype.method=function(name,func){
//log(typeof this);
 if (!this.prototype[name]) { // this refers to the context of FunctionClass if invoked as 'FunctionClass.method(x,y)'
                                 // even though it travels down to check 'method(name,func)' property/method in its {{prototype}} chain in Function.Prototype
        this.prototype[name]=func;
        return this;
    }
};

if(typeof Object.create!== 'function'){
    Object.prototype.create=function(o){
        var F=function (){};
        F.prototype=o;
        return new F();
    };
}

/*if(typeof Function.create!== 'function'){
Function.prototype.create==function(o){
var F=function (){};
F.prototype=o;
return new F();
};
}
*/

var FunctionClass=function () { //has a accessible prototype property which is a object with 'constructor' property pointing back to the function
    
}; // Also has a inaccessible {{prototype}} property that cannot be accessed and is pointing to Function.prototype



FunctionClass.method('add',function(a,b){ // adds a new method 'add' to the accessible 'prototype' property of FunctionClass

    return a+b;
});

FunctionClass.prototype.x=10;

/*
1.Creates a new object
*/
//var test_obj=Object.create(FunctionClass.prototype);

//log(test_obj.x);
//log(test_obj.add(3,4));

/*test_func.prototype.add=function(a,b){
return a+b;
};*/

////console.log(test_func.add(3,4));

var Post=function () {
    var that=this;
    var author;
    var content;
    var timeStamp;
    var headline;

    return {
        set_author: function (value){
            that.author=value;
        },
        get_author: function ( ) {
            return that.author;
        },
        set_content: function (value){
            that.content=value;
        },
        get_content: function ( ) {
            return that.content;
        },
        set_timeStamp: function (value){
            that.timeStamp=value;
        },
        get_timeStamp: function ( ) {
            return that.timeStamp;
        },
        set_headline: function (value){
            that.headline=value;
        },
        get_headline: function ( ) {
            return that.headline;
        }
    };
};

var post_list=[];
//var name;

Post.populateList=function(list_arg){

var i=0;
var time=new Date();
var time_str=time.getDate()+'/'+time.getMonth()+'/'+time.getFullYear();
    for(i=0;i<10;i++){
        var temp_post=new Post();
        temp_post.set_author(i+'_author');
      // log(temp_post.get_author());
        temp_post.set_content(i+'Eu fugiat nulla pariatur. Velit esse cillum dolore duis aute irure dolor ut aliquip ex ea commodo consequat.');
      // log(temp_post.get_content());
        temp_post.set_timeStamp(i+time_str);
      // log(temp_post.get_timeStamp());
        temp_post.set_headline('Headline For'+i);
      // log(temp_post.get_headline());
        list_arg.push(temp_post);
    }
};

Post.populateList(post_list);

window.onload=function(){
    log('check');
log(document.getElementById('list-container').innerHTML);
var list_iterator=0;
    for(;list_iterator<post_list.length;list_iterator++){
       var listItem=document.createElement('div');
       document.getElementById('list-container').appendChild(listItem);
       listItem.className='post-list';
       listItem.innerHTML='<div style="display:inline-block;padding-right: 5px;vertical-align:top;"><img class="post-list-img" width="64" height="64" src="ericf-avatar.png" class="email-avatar"></div>'+
'<div style="width:75%;display:inline-block;"> <div style="margin:0px 0px 3px 0px;" ><span>0_author</span> <span style="float:right;">02/07/2013</span> </div><div style="margin:0px 0px 10px 0px;font-weight:bold;font-size:15px;"><span>Header for'+list_iterator+'</span></div><div style="margin:0px 0px 10px 0px;"><span>Eu fugiat nulla pariatur. Velit esse cillum dolore duis aute irure dolor ut aliquip ex ea commodo consequat.</span> </div></div>';
       /*listItem.onclick=function(value){
return function(){
document.getElementById("current-post").innerHTML=value;
}(value);
}(listItem.innerHTML);*/
       var populateContentContainer=function(value){
            return function(e){
                document.getElementById("current-post").innerHTML=value.innerHTML;
                //value.style.borderBottom='5px solid #3366cc;';
                if(!value.style.borderLeft||value.style.borderLeft=='medium none'){
                    value.style.borderLeft='6px solid #02A3C6';
                    //console.log(value.style.background);
                    value.style.background='#EEEEEE';
                }                
                else{
                    value.style.borderLeft='';
                    ////console.log(value.style.background);
                    value.style.background='#FFFFFF';
                }
               // log(value.style.borderLeft);
            };
        
       };
       listItem.onclick=populateContentContainer(listItem);




    }


    document.getElementById('loginContainer').onclick=function helper(value){
        return function(){
            if(value.style.height!='20%'){
                value.style.height='20%';
            }else{
                value.style.height='9%';
            }
            
        };
    }(document.getElementById('loginContainer'));



//posts.populate(post_list)

//add default highlight for today


//document.getElementById('nav-menu').childNodes[0].childNodes[0].style+='background: rgb(55, 60, 90); cursor: hand; cursor: pointer;';
};

//add helper function 
