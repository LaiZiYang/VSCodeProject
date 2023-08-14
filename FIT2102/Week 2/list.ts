module lists {

const list: List<number> = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 3,
            next: null
        }
    }
}


type List<T> = IListNode<T> | null

interface IListNode<T> {
    data: T,
    next: List<T>
}

function length<T>(l:List<T>):number {
    return l ? 1 + length(l.next) : 0
}

function forEach<T>(l:List<T>, f: (e:T)=>void):void {
    if (l) {
        f(l.data)
        forEach(l.next, f)
    }
}

console.log(length(list))
forEach(list, console.log)
}