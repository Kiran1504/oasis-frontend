import { useState } from "react";

export default function UserEvents({ events }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const months = {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec'
    }

    return (
        <div>
            <div className="flex flex-row gap-4">
                <button onClick={() => setActiveIndex(0)} className={`p-2 bg-[#2a313d] font-[2rem] rounded-full border border-solid ${activeIndex === 0 ? 'border-blue-500' : 'border-slate-400'}`}>&nbsp;Created&nbsp;</button>
                <button onClick={() => setActiveIndex(1)} className={`p-2 bg-[#2a313d] font-[2rem] rounded-full border border-solid ${activeIndex === 1 ? 'border-blue-500' : 'border-slate-400'}`}>&nbsp;Joined&nbsp;</button>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    activeIndex === 0 ?
                        events.created.map((event, index) => {

                            const month = event.date.split('-')[1];
                            const day = event.date.split('-')[2];

                            return (
                                <div key={index} className="flex flex-col items-center gap-3 bg-[#2a313d] my-4 py-4 border border-solid border-slate-400 rounded-2xl">
                                    <section className="flex flex-col justify-center">
                                        <figure>
                                            <img src={event.imageEvent} width="175px" className="h-auto border border-solid border-white rounded-[1rem]"></img>
                                        </figure>
                                    </section>
                                    <section className="grid grid-cols-12 gap-4 justify-center w-[175px] px-1">
                                        <div className="col-span-5 flex flex-col items-center text-end">
                                            <div className="flex flex-col gap-1 justify-between">
                                                <h1 className="font-bold text-3xl text-blue-500">{months[month]}</h1>
                                                <h1 className="font-bold text-3xl text-blue-500">{day}</h1>
                                            </div>
                                        </div>
                                        <div className="col-span-1 w-[5px] h-full bg-slate-300"></div>
                                        <div className="col-span-6 flex flex-col     gap-2">
                                            <div className="font-bold text-blue-500 text-2xl">{event.title}</div>
                                            <div>Host: {event.host}</div>
                                            <div>Description: {event.description}</div>
                                        </div>
                                    </section>
                                </div>
                            )
                        })
                        :
                        events.joined.map((event, index) => {
                            const month = event.date.split('-')[1];
                            const day = event.date.split('-')[2];

                            return (
                                <div key={index} className="flex flex-col gap-3 items-center bg-[#2a313d] my-4 py-4 border border-solid border-slate-400 rounded-2xl">
                                    <section className="flex flex-col justify-center">
                                        <figure>
                                            <img src={event.imageEvent} width="175px" className="h-auto border border-solid border-white rounded-[1rem]"></img>
                                        </figure>
                                    </section>
                                    <section className="flex flex-col justify-center w-[175px]">
                                        <div className="flex flex-col items-center">
                                            <h1 className="font-bold text-3xl text-blue-500">{event.title}</h1>
                                        </div>
                                        <div className="h-[5px] my-3 bg-slate-300"></div>
                                        <div className="flex flex-col">
                                            <div className="font-bold mb-2 text-blue-500 text-2xl">{months[month]}&nbsp;{day}</div>
                                            <div>Host: {event.host}</div>
                                            <div>Description: {event.description}</div>
                                        </div>
                                    </section>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}