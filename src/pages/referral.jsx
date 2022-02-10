import React from 'react'

const Referral = () => {

    return (
        <div className="w-3/4 mx-auto">
            <div className="font-semibold text-center mt-24 text-5xl text-gradPink">
                Referral Link Generator
                <div className="text-xl flex justify-center">
                    <p className="font-normal text-2xl text-white my-12 px-24 text-center">
                        Enter your registration number to generate a unique referral link.
                    </p>
                </div>
                <form>
                    <div>
                        <input
                            className="bg-gray-900 h-12 w-1/2 rounded-3xl border-0 text-xl text-center"
                            placeholder="Enter your Registration Number"
                            type="rno"
                            required
                        />
                    </div>
                    <div className="bg-gradient-to-r from-gradPink to-gradViolet py-4 mx-auto mt-16 text-xl text-white w-1/5 rounded-3xl shadow-xl" >
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Referral

//https://docs.google.com/forms/d/e/1FAIpQLSeZlAtnx-v0s_EXoI3BONnqk3wMBMTV5hmEiXmYgDbY3aNkwg/viewform?entry.982405539=19BCE1165