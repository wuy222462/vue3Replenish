//定义一个接口,用于限制person 对象的具体属性
export interface PersonInterface{
    id:string,
    name:string,
    age:number
}

//一个自定义类型
export type Persons =Array<PersonInterface>

export type PersonList=PersonInterface[]