"use client"
const { createContext, useState, useContext } = require("react");

const AppContext=createContext(null);

export function AppProvider({children}) {
    const [AuthPage,setAuthPage]=useState("login");
    const [modal,setModal]=useState(false);
    const [propertyData, setProperty] = useState(null);
    const [searchList,setSearchList]=useState(null);
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [scores,setScores]=useState({Rank:'1',Percentile:'30',Current_Score:'10'})

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)
    function handleSearchList(data){
        setSearchList(data)
        console.log(data)
    }
    function toggleAuthPage(data){
        setAuthPage(data)
    }

    function funcSetProperty(data){
        setProperty(data)
    }
    function toggleModal(){
        setModal(!modal)
    }
    function setUpdateScore(data){
        setScores({Rank:data.Rank,Percentile:data.Percentile,Current_Score:data.CS})
    }


    return(
        <AppContext.Provider value={{
            AuthPage,
            toggleAuthPage,
            propertyData,
            funcSetProperty,
            searchList,
            handleSearchList,
            modal,
            toggleModal,
            isSidebarOpen,
            toggleSidebar,
            scores,
            setUpdateScore
            }}>
           {children}
        </AppContext.Provider>
    )
}
export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useActions must be used within an ActionsProvider");
    }
    return context;
};

