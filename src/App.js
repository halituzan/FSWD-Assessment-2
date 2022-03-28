import React,{useState} from 'react';
import './App.css';
import ResidentsList from './Components/ResidentsList';
import Search from './Components/Search';
import Error from './Components/Error';

function App() {
  const [student, setStudent] = useState("");
  const [joinDate, setJoinDate] = useState("gg.aa.yyyy");
  const [residentList, setResidentList] = useState([]);

  return (
    <div className="App">
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search setFunc={{setStudent,setJoinDate,setResidentList}} values={{student,joinDate,residentList}} />
        <Error values={{student,joinDate}}/>
        <ResidentsList residentList={residentList} />
      </div>
    </div>
  );
}

export default App;
