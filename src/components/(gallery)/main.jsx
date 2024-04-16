"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Main() {

    return (
        <div className="flex items-center justify-center w-full min-h-screen p-2 text-center">
            <TypeAnimation className="text-lg font-bold capitalize md:text-xl lg:text-3xl xl:text-4xl text-amber-300" speed={50}
                sequence={[
                    '" Unlocking creativity, revealing soon... "', // English
                    1000,
                    '" कल्पनाओं का खजाना लिए जल्द ही आ रहे हैं। "', // Hindi
                    1000,
                    ' " সৃজনশীলতা অনলক করা, শীঘ্রই উদযাপিত হচ্ছে। "', // Bengali
                    1000,
                    ' " సృజనాత్మకతను అందుకునే, త్వరలో వివరించబడుతున్నది... "', // Telugu
                    1000,
                    ' " கலையினை உடையதாக உள்ளது, விரைவில் உள்ளிடப்படுகிறது... "', // Tamil
                    1000,
                    ' " ಸೃಜನಾತ್ಮಕತೆಯನ್ನು ತೆರೆಯುತ್ತ, ಬೇಗ ಬಹಿಷ್ಕರಿಸಲಾಗುತ್ತಿದೆ... "', // Kannada
                    1000,
                    ' " സൃഷ്ടിക്കൽ അനാവരണം, അതീവ soon... "', // Malayalam
                    1000
                ]}
                repeat={Infinity}
            />
        </div>
    )
}

export default Main