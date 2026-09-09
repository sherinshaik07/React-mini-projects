function UserCard({name,age,role}){
    return(
        <div>
            <hr></hr> 
            <h2>NAME: {name}</h2>
            <h2>AGE : {age}</h2>
            <h2>ROLE : {role}</h2>
        </div>
    );
}
export default UserCard;