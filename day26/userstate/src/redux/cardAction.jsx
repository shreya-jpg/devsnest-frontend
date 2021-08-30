const cardActionName=(name)=>{
    return{
        type:'NAME_INPUT',
        payload:name
    }
}

const cardActionPassword=(password)=>{
    return{
        type:'PASSWORD_INPUT',
        payload:password
    }
}

export {cardActionName,cardActionPassword}