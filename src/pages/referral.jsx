import React from 'react'

const Referral = () => {

    const [rno, setRno] = React.useState("")
    const [showLink, setShowLink] = React.useState(false)
    const baseText = "https://docs.google.com/forms/d/e/1FAIpQLSeZlAtnx-v0s_EXoI3BONnqk3wMBMTV5hmEiXmYgDbY3aNkwg/viewform?entry.982405539="

    const handleSubmit = (e) => {
        e.preventDefault();
        setRno(rno.toUpperCase());
        if (!validRNo.test(rno))
            alert("Invalid Registration Number");
        else {
            document.getElementById("refForm").reset();
            setShowLink(true);
        }
    }

    const validRNo = new RegExp(
        '[0-9]{2}[a-zA-Z]{3}[0-9]{4}'
    );

    return (
        <div className="w-3/4 mx-auto">
            <div className="font-semibold text-center mt-24 text-5xl text-gradPink">
                Referral Link Generator
                <div className="text-xl flex justify-center">
                    <p className="font-normal text-2xl text-white my-12 md:px-24 text-center">
                        Enter your registration number to generate a unique referral link.
                    </p>
                </div>
                <form onSubmit={handleSubmit} id="refForm">
                    <div>
                        <input
                            className="bg-gray-900 h-12 md:w-1/2 rounded-3xl border-0 text-xl text-center"
                            placeholder="Registration Number"
                            type="text"
                            onChange={e => setRno(e.target.value)}
                            required
                        />
                    </div>
                    <div className="bg-gradient-to-r from-gradPink to-gradViolet py-3 mx-auto mt-16 text-xl text-white w-1/2 md:w-1/5 rounded-3xl shadow-xl" >
                        <button type="submit">Submit</button>
                    </div>
                </form>
                {showLink ?
                    <div className="font-semibold text-center mt-24 md:w-3/5 mx-auto text-2xl text-gradPink">
                        Referral Link -&nbsp;
                        <div className='text-white text-xl break-all'>
                            <a href={baseText + rno} target="_blank" rel="noopener noreferrer">{baseText + rno}</a>
                        </div>
                    </div>
                    :
                    ''
                }
            </div>
        </div>
    )
}

export default Referral

//https://docs.google.com/forms/d/e/1FAIpQLSeZlAtnx-v0s_EXoI3BONnqk3wMBMTV5hmEiXmYgDbY3aNkwg/viewform?entry.982405539=19BCE1165