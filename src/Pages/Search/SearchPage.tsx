import {Navbar} from "../../Navbar.tsx";
import Collapsible from "react-collapsible";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import axiosInstance from "../../axiosInstance.ts";
import {SearchResult} from "../../Model/SearchResult.ts";
import {QuestionBox} from "../QuestionBox.tsx";
import {UserBox} from "../UserBox.tsx";
import MultiRangeSlider from "multi-range-slider-react";

export function SearchPage() {
    const [searchParams, _] = useSearchParams();
    const [user, setUser] = useState(true)
    const [question, setQuestion] = useState(true)
    const [minDifficulty, setMinDifficulty] = useState(0);
    const [maxDifficulty, setMaxDifficulty] = useState(5);
    const [minReadability, setMinReadability] = useState(0);
    const [maxReadability, setMaxReadability] = useState(5);
    const searchQuery = searchParams.get("query");
    const [searchResult, setSearchResult] = useState<SearchResult>();

    useEffect(() => {
        axiosInstance.post<SearchResult>("/search", {
            Questions: question,
            Users: user,
            SearchQuery: searchQuery,
            maxDifficulty: maxDifficulty,
            minDifficulty: minDifficulty,
            maxReadability: maxReadability,
            minReadability: minReadability,
            tags: []
        }).then((r) => setSearchResult(r.data)).catch(() => console.log("Error trying to get search results"));
    }, [searchQuery, user, question, minDifficulty, maxDifficulty, minReadability, maxReadability]);

    return (
        <>
            <div className={"flex flex-col h-screen"}>
                <Navbar></Navbar>
                <div className={"flex flex-1 justify-center overflow-auto gap-2 "}>
                    <div className={"text-center m-5 bg-primary_mid p-5 w-1/6"}>
                        <h1 className={"text-3xl mt-3 mb-5"}>
                            Filters
                        </h1>
                        <div className={"flex items-center justify-center gap-3"}>
                            <p>Search Questions:</p>
                            <input checked={question} type={"checkbox"} onChange={(e) => setQuestion(e.target.checked)}/>
                        </div>
                        <div className={"flex items-center justify-center gap-3"}>
                            <p>Search Users:</p>
                            <input checked={user} type={"checkbox"} onChange={(e) => setUser(e.target.checked)}/>
                        </div>
                        <div className={"mt-3"}>
                            <p>Readability</p>
                            <MultiRangeSlider min={0} max={5} step={1} minValue={minReadability} maxValue={maxReadability} onInput={(e) => {setMinReadability(e.minValue); setMaxReadability(e.maxValue)}} subSteps={false} className={"shadow-none border-none"} ruler={false} barInnerColor={"#674188"}></MultiRangeSlider>
                        </div>
                        <div className={"mt-3"}>
                            <p>Difficulty</p>
                            <MultiRangeSlider min={0} max={5} step={1} minValue={minDifficulty} maxValue={maxDifficulty} onInput={(e) => {setMinDifficulty(e.minValue); setMaxDifficulty(e.maxValue)}} subSteps={false} className={"shadow-none border-none"} ruler={false} barInnerColor={"#674188"}></MultiRangeSlider>
                        </div>
                    </div>

                    <div className={"text-center w-full mt-5 m-20 rounded bg-primary_mid"}>
                        <h1 className={"text-5xl mt-3 mb-5"}>
                            Search Results
                        </h1>
                        <Collapsible trigger={"Questions 🔽"} triggerWhenOpen={"Questions  🔼️"} open={true} className={"w-full"} contentInnerClassName={"flex flex-wrap justify-center bg-primary_mid rounded"} triggerClassName={"w-full p-3 block"} triggerOpenedClassName={"w-full p-3 block"} overflowWhenOpen={"visible"}>
                            {searchResult ? searchResult.results.questions.map((question) => {
                                return (<QuestionBox question={question}/>)
                            }) : (<></>)}
                        </Collapsible>
                        <Collapsible trigger={"Users 🔽"} triggerWhenOpen={"Users 🔼️"} open={true} className={"w-full"} contentInnerClassName={"flex flex-wrap justify-center bg-primary_mid rounded"} triggerClassName={"w-full p-3 block"} triggerOpenedClassName={"w-full p-3 block"} overflowWhenOpen={"visible"}>
                            {searchResult ? searchResult.results.users.map((user) => {
                                return (<UserBox user={user}/>)
                            }) : (<></>)}
                        </Collapsible>
                    </div>
                </div>
            </div>


        </>
    );
}
