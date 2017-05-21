typescript-base
===
***
1. 数据类型
--
#### 1.1 array / boolean / number /string
以上数据类型用法一般无二，具体参考代码，在此不作记录

#### 1.2 any
以any类型定义的数据，数据类型无强制要求，在后面使用中，类型可随意更改

	var demo: any[] = [1,'errer',3];
	var test: any = 123;
	test = 'yishuihan';
	test = false;
	function tell(){
	    alert(demo[1]);
	    alert(test);
	}
	tell();//errer //false

#### 1.3 enum 枚举类型
枚举类型以类似map，以键值对形式索取已经定义过的数值

	enum color {red=3, green, blue};
	var c: color = color.green;
	function tell(){
	    alert(c);
	}
	tell();//4

#### 1.4 void
方法被指定其他类型时，必须返回指定类型的数据，否则报错；  
若被指定类型为void，无须返回值

	function say(): number{
	    return 123;
	}
	function test(): string{
	    return 'yishuihan';
	}
	function tell(): void{
	    //success
	}

2. 接口
--
> 接口，即类型检查，专注于解析值所具有的"形态"，这是TypeScript的核心原则之一

#### 2.1 接口创建
	interface arguments{
	    label: string;
	}
	function printeLabel(labelObj: arguments){
	    console.log(labelObj.label);
	}
	var myLabel = {label: 'yishuihan-001'};
	printeLabel(myLabel);

#### 2.2 可选属性
定义接口的属性是可选择的，即必须或非必须，对于可选属性，需要在属性后加问号标明  

	interface info{
	    name: string;
	    age?: number;
	}
	function printeInfo(obj: info){
	    console.log(obj.name);
	    // console.log(obj.age);
	}
	var myInfo = {name: 'yishuihan易水寒'};
	printeInfo(myInfo);

#### 2.3 接口类型： 函数 / 数组 / class / 混合类型
1. 函数类型接口以定义函数参数的形式体现
2. 数组类型接口以定义数组 key：value 值的类型体现
3. class类型接口以定义其属性类型的形式体现
4. 在混合类型下，一个接口可以继承其他一个或多个接口的所有属性，并拥有自己的似有属性

3. 函数
---
#### 3.1 函数类型
函数类型下，如有定义返回类型，则必须返回所定义类型的数据  

	function func(x:number, y:number):string{
	    return x+y+'string';
	}
	var myFunc = function(x:number, y:string):string{
	    return x+y;
	};
	var youFunc:(name:string, age:number)=>number = function(n:string, a:number):number{
	    return a;
	}

#### 3.2 可选参数和默认参数
1. 定义可选参数，类似定义接口的可选属性，直接在参数名后面加问号即可     

		function buildName(firstName:string, lastName?:string){
		    if(lastName){
		        return firstName+lastName;
		    }else{
		        return firstName;
		    }
		}
		var person1 = buildName('ime','iwen');
		var person2 = buildName('ime');
2. 定义默认参数，对该参数直接复制即可  

		function buildName(firstName:string, lastName="yishuihan"){
		    return firstName+' and '+lastName;
		}
		var person1 = buildName('ime','iwen');
		var person2 = buildName('ime');
		document.getElementById('pid').innerHTML = person2;

#### 3.3 可变参数，在不明确参数数量的情况下使用

#### 3.4 箭头函数和this关键字
>使用注意点：  
>
>（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。  
>（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。  
>（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。  
>（4）不可以使用yield命令，因此箭头函数不能用作Generator函数。  
>
>this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。正是因为它没有this，所以也就不能用作构造函数。  

	var people = {
	    name: ['yishuihan','易水寒','杨轩','穆依依'],
	    getName: function(){
	        return ()=>{
	            var i = Math.floor(Math.random()*4);
	            return {
	                n: this.name[i]
	            }
	        }
	    }
	};
	var myName = people.getName();
	alert('姓名: '+myName().n);

#### 3.5 重载
同一函数可被定义多次，使用时可根据参数类型选择性调用相关函数  

	function attr(name: string):string;
	function attr(age: number):number;
	function attr(nameORage):any{
	    if(nameORage && typeof nameORage === 'string'){
	        alert('name 姓名');
	    }else{
	        alert('age 年龄');
	    }
	}
	attr(22);
	attr('yishuihan');

4. Class类
---
#### 4.1 类的创建
	class Person{
	    name: string;
	    age: number;
	    constructor(name: string, age: number){
	        this.name = name;
	        this.age = age;
	    }
	    print(){
	        return this.name+':'+this.age;
	    }
	}
	var p = new Person('yishuihan',22);
	alert(p.print());

#### 4.2 类的继承
	class Person{
	    name: string;
	    age: number;
	    constructor(name:string, age:number){
	        this.name = name;
	        this.age = age;
	    }
	    tell(){
	        return this.name +'&'+ this.age;
	    }
	}
	class Student extends Person{
	    school: string;
	    constructor(school:string){
	        super('yishuihan',222);
	        //'super' must be called before accessing 'this' in the constructor of a derived class.
	        this.school = school;
	    }
	    tell(){
	        return this.name + this.age + this.school;
	    }
	}
	var aa = new Student('大学');
	alert(aa.tell());

#### 4.3 访问修饰符
如不加访问修饰符时，默认为public

	class Person{
	    public name: string; //可被访问
	    private job: string; //不可访问
	    age: number; //可被访问
	    constructor(name: string, age: number, job: string){
	        this.name = name;
	        this.age  = age;
	        this.job  = job;
	    }
	    print(){
	        return this.name + ':'+ this.age + ':'+ this.job;
	    }
	}
	class Student extends Person{
	    school: string;
	    constructor(school: string){
	        super('iwen',88888888,'doctor');
	        this.school = school;
	    }
	    print(){
	        return this.name + ':' + this.age + ':' + this.school + ':' + this.job;
	    }
	}
	var aa = new Student('大学校');
	alert(aa.print());

#### 4.4 封装的实现
	class Person{
	    private _age: number;
	    tell(): number{
	        return this._age;
	    }
	    get age():number{
	        return this._age;
	    }
	    set age(newAge:number){
	        this._age = newAge;
	    }
	}
	var aa = new Person();
	aa.age = 22;
	alert(aa.tell());

#### 4.5 static静态
如果以static静态定义，创建的实例需要以类名的行形式赋值，且类的内部也不能使用 this 关键字取值，而同样应该使用类名进行取值操作

	class Person{
	    static name: string;
	    tell(){
	        alert('aa的年龄是'+ Person.name);
	    }
	}
	var aa = new Person();
	Person.name = '易水寒';
	aa.tell();