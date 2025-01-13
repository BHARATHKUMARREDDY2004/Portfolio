import React from 'react';

const skills = [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'CSS',
    'HTML',
    'Tailwind CSS',
    'Git',
];

const Skills = () => {
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="list-disc list-inside">
                {skills.map((skill, index) => (
                    <li key={index} className="text-lg mb-2">
                        {skill}
                    </li>
                ))}
            </ul>

            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="list-disc list-inside">
                {skills.map((skill, index) => (
                    <li key={index} className="text-lg mb-2">
                        {skill}
                    </li>
                ))}
            </ul>

            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="list-disc list-inside">
                {skills.map((skill, index) => (
                    <li key={index} className="text-lg mb-2">
                        {skill}
                    </li>
                ))}
            </ul>            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="list-disc list-inside">
                {skills.map((skill, index) => (
                    <li key={index} className="text-lg mb-2">
                        {skill}
                    </li>
                ))}
            </ul>            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="list-disc list-inside">
                {skills.map((skill, index) => (
                    <li key={index} className="text-lg mb-2">
                        {skill}
                    </li>
                ))}
            </ul>            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="list-disc list-inside">
                {skills.map((skill, index) => (
                    <li key={index} className="text-lg mb-2">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;