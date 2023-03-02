import React, { useState, useContext, createContext, useEffect } from "react";
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios'
const rootUrl = 'https://api.github.com';
const AppContext = createContext();

const GitHubProvider = ({ children }) => {
    const [user, setUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setFollowers] = useState(mockFollowers);
    const [request, setRequest] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({ show: false, msg: "" })

    const apiFetch = () => {
        axios(`${rootUrl}/rate_limit`)
            .then(({ data }) => {
                let { rate: { remaining } } = data;
                // console.log(data)
                // console.log(remaining);
                setRequest(remaining);
                if (remaining === 0) {
                    errorFunction(true, "Sorry, Request limit is 60 so 1-hour wait")
                }
            }).catch((err) => console.log(err))
    }


    const searchUser = async (user) => {
        setIsLoading(true);
        errorFunction()
        const res = await axios(`${rootUrl}/users/${user}`).catch((err) => console.log(err))

        if (res) {
            setUser(res.data)
            const { login, followers_url } = res.data;

            
            await Promise.allSettled([
                axios(`${rootUrl}/users/${login}/repos?per_page=100`),
                axios(`${followers_url}?per_page=100`),
            ])
                .then((results) => {
                    const [repos, followers] = results;
                    const status = 'fulfilled';
                    if (repos.status === status) {
                        setRepos(repos.value.data);
                    }
                    if (followers.status === status) {
                        setFollowers(followers.value.data);
                    }
                })
                .catch((err) => console.log(err));
        }
        else {
            errorFunction(true, "User not found")
        }
        setIsLoading(false);
    }


    const errorFunction = (show = false, msg = '') => {
        setError({ show, msg })
    }


    useEffect(apiFetch, [])
    return (
        <AppContext.Provider value={{ user, repos, followers, request, error, isLoading, searchUser }}>
            {children}
        </AppContext.Provider>
    )
}


export const GlobalContext = () => {
    return useContext(AppContext);
}
export { GitHubProvider, AppContext }