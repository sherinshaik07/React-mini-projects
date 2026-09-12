function StudentList(){
    const students=[
        {id:1,name:"SHAIK SHERIN",age:21,course:"CSE AIML"},
        {id:2,name:"RAHUL",age:23,course:"ECE"},
        {id:3,name:"SANA",age:22,course:"CSE DS"}
    ];

return(
    <div>
        <hr></hr>
        <h1>STUDENT LISTS</h1>
        {students.map((s)=>(
            
            <div key={s.id}>
                <h2>NAME : {s.name}</h2>
                <h2>AGE : {s.age}</h2>
                <h2>COURSE : {s.course}</h2>
            </div>

        ))}
    </div>
);
}
export default StudentList;