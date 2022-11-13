# 🔥 OOP

## 📎 class
   1. 유사한 모양의 객체를 만들기 위한 템플릿
   2. 생성자를 이용해서도 생성이 가능하지만 생성자를 이용하게 되면 모든 멤버를 생성자 안에서 만들어야 하기 때문에 객체가 가져야 하는 메서드가 많아지면 코드가 가독성이 떨어지게 된다.
   3. ECMA2015(ES6)에서 class 문법을 추가시킴
   4. 선언
   ```js
      //기본적인 방법
      class 클래스이름 {
         클래스 내용
      }

      ?/상속을 받는 경우
      class 클래스이름 extends 상위클래스이름{
         클래스 내용
      }

      //표현식을 이용
      let 이름 = class{클래스 내용}

      let 이름 = class 내부에서사용할이름{클래스 내용}

      // 클래스 이름은 일반적으로 첫글자를 대문자로 합니다.
   ```
   5. 클래스를 이용한 객체 생성
   - 클래스를 이용해서 생성된 객체를 **Instance**라고 한다.
   - 클래스의 생성자는 클래스 이름과 동일하게 만들어지기 때문에 생성자 이름 대신에 클래스 이름을 기재해도 된다.
   ```
   var(let 또는 const 가능) 이름 = new 생성자이름(매개변수);
   ```
   - new 연산자는 생성자를 호출해서 인스턴스를 **heap 영역**에 만들고 그 참조를 리턴하는 연산자이다.
   6. 클래스 안에 멤버 속성 만들기
   - 메서드 안에서 this 와 이름을 만들면 인스턴스의 속성이 된다.
   7. JavaScript에서의 class는 정적이지 않다.
   - JavaScript 에서는 class의 내용을 수정할 수 있다.
   - Class 가 prototype 이라는 내부 객체를 이용해서 모든 속성을 저장한다.
   - prototype이 객체라서 확장이 가능하다.
   - 클래스를 선언할 때는 없었는데 나중에 추가하거나 변경하고자 하면
   ```
   클래스이름.prototype.속성이름
   ```
   내용으로 클래스에 속성을 추가하는 것이 가능하다.
   
   8. 이름
   - JavaScript에서는 값이나 함수 나 클래스 나 객체 모두 동인한 데이터로 취급
   - 하나의 이름에 한 가지만 저장이 가능
   - 중복 정의(Overloading)가 안됨
   ```js
   setName(){this.name="a"}
   setName = function(){this.name="a"}; //컴퓨터가 본 관점(중복)

   setName(name){this.name = name}
   setName = function(name){this.name = name;} //컴퓨터가 본 관점(중복)
   ```
   
## 📎 Constructor(생성자)
   - 인스턴스를 생성하고 그 참조를 리턴하는 특별한 목적의 메서드
   - 메서드에서 this.속성이름을 이용해서 인스턴스의 속성을 생성할 수 있다.
   일반 메서드에서 속성을 생성하는 경우 메서드 호출을 하지 않으면 속성을 사용할 수 없다.❗️
   - 생성자는 인스턴스를 생성하기 위해 호출하는 메서드기 때문에 인스턴스를 만들려면 반드시 한 번은 호출해야 한다.<br />
   - 생성자에서 필요한 속성을 만들면 속성을 만들기 위해서 다른 메서드를 호출하는 번거로움을 없앨수 있다.<br />
   - JavaScript에서는 constructor 라는 속성에 생성자를 만들어 대입할 수 있다.<br />
   - 기본적으로 매개변수가 없고 아무일도 하지 않는 생성자 1개를 제공한다.<br />
   - 생성자를 직접 만들면 제공되는 생성자는 소멸된다.<br />
   - 생성자를 호출하는 방법은 `new 생성자이름(매개변수 나열)`-> 실제로는 클래스이름.prototype.constructor 가 호출된다.
```js
        //class : 동일한 모양의 객체를 만들기 위해서 사용하는 모형
        //사용자 정의 자료형
        const Member = class{
            //생성자
            constructor(name){
                //name 속성을 { } 안에 감싸서 만들면 속성이 생성됩니다.
                //인스턴스가 속성을 직접 호출하는 것이 가능
                // return{name : "noname"}
                
                //이렇게 만들면 인스턴스가 직접 호출하는 것이 안됨
                //이 경우는 데이터를 리턴하는 메서드를 별도로 만들어야 사용 가능
                this.name = name;
            }
            //name 이라는 속성을 생성하면서 대입
            setName(name){
                this.name = name;
            }
            //name 속성의 값을 리턴하는 메서드
            getName(){
                return this.name;
            }
        }
        //인스턴스 생성
        const member = new Member();
        member.setName("아담");
        // setName을 먼저 호출하지 않으면 name이 만들어지지 않음

        //생성자에서 name이라는 속성을 생성했으므로 name 속성을 사용하는 것이 가능합니다.
        console.log(member.name)
        // console.log(member.getName())
```

## 📎 getter & setter - 접근자 메서드
   - 인스턴스 안에 존재하는 속성의 데이터를 변경하고 리턴하는 메서드
   
   - getter 는 속성의 데이터를 리턴하는 메서드
        - 일반적으로 매개변수는 없고 속성의 데이터만 리턴한다.
        - 이름은 get 속성이름으로 만드는데 속성 이름의 첫글자는 대문자로 표기한다. - camel 표기법
        - Boolean 인 경우는 get 대신에 is를 사용하기도 한다.

   - setter는 속성의 데이터를 설정하는 메서드
      - 매개변수는 1개(데이터 전체) 또는 2개(배열이나 객체의 일부 속성을 변경하는 경우 인덱스나 속성이름을 매개변수로 추가하는 경우가 있다.)로 하는 것이 일반적이면 리턴을 하지 않는다.
      - 이름은 `set 속성이름` 으로 만든다.


    ❗️ 결론 : 자바스크립트에서는 getter 앞에 get을 setter 앞에 set을 추가하면 데이터를 저장하는 속성처럼 사용하는 것이 가능하다. 개발자들은 이 문법은 잘 사용하지 않는다.   
    💥 시간날 때 보기
    ```
           const Person = class{
            //생성자
            constructor(num = 1,name = "",tel = ""){
                this.num = num;
                this.name = name;
                this.tel = tel;
            }
            
            //접근자 메서드 - 속성의 값을 설정하고 리턴하는 메서드
            //get 과 set을 붙이면 속성처럼 메서드를 호출할 수 있다.
            set setNum(num){
                this.num = num;
            }
            get getNum(){
                return this.num;
            }
        }

        //인스턴스 생성
        const person1 = new Person();
        const person2 = new Person(2,"파이터","010");
        const person3 = new Person(3, "나이트", "011");

        console.log(person1.num)
        console.log(person2.name)

        //메서드를 이런식으로 호출 할 수 있지만 잘 사용하지 않음
        person1.setNaum = 103;
        console.log(person1.getNum) //위 처럼 하면 ()뺄 수 있음

        // person1.setNum(102)
        // console.log(person1.getNum())
        // 결론 get set 잘 사용 안함


   ## static
   - 메서드 앞에 static을 붙이면 인스턴스가 아니라 클래스가 호출할 수 있는 속성이 된다.<br />
   - static 이 붙으면 인스턴스가 호출할 수 없음<br />
   - 인스턴스의 메서드 안에서 static 메서드 호출하는 것은 가능 하지만 반대로는 되지 않음<br /> ❗️
   - 클래스가 만들어지고 인스턴스가 생성되기 때문에 인스턴스 메서드를 호출하는 시점에는 클래스의 내용이 완성이 된 상태이다.<br />
   - 그렇지만 클래스의 메서드를 호출하는 시점에는 인스턴스가 만들어져 있을 수도 있고 없을 수도 있기 때문에 클래스의 메서드에서 인스턴스의 메서드를 호출하는 것은 안된다.(권장❗️)

1. 상속<br />
   => 상위 클래스의 모든 것을 하위 클래스가 물려받는 것<br />
   => 기본적으로는 클래스들을 만들다가 중복되는 내용이 나오면 중복되는 내용을 가지고 상위 클래스를 만들고 다른 크래스들에서 상속하는 형태로 취하게 된다.


