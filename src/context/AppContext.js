import { createContext } from "react"
import { useState } from "react";
import { baseUrl } from "../baseUrl";
//step1
export const AppContext=createContext();//creation of context

export default function AppContextProvider({children}){
    

    const [loading, setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);
    //value is object, in this we will store the data and send to our consumers(childern)
    async function fetchBlogPosts(page=1){
        setLoading(true);
        
        
        let url =`${baseUrl}?page=${page}`;
        try{
            const result=await fetch(url);
            const data= await result.json();
            

            setPage(data.page);           
            setPosts(data.posts);            
            setTotalPages(data.totalPages);           
        }
        catch(error){
            console.log("error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }
    
    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }
    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };
   //step 2
    return (<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>);   

}



