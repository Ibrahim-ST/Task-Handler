import Section from "./Components/Section"


function App() { 

  return (
    <div className="m-2   flex-nowrap overflow-x-scroll  flex    gap-1">
       <Section title={"Incomplete"} color={"bg-[#D21010]"}/>
       <Section title={"To Do"} color={"bg-[#00B5FF]"}/>
       <Section title={"Doing"} color={"bg-[#FFE700]"}/>
       <Section title={"Under Review"} color={""}/>
       <Section title={"Completed"} color={""}/>
       <Section title={"Overdue"} color={""}/>
    </div>
  )
}

export default App
