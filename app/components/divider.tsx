export default function Divider({params}) {
    return (
        <span className="relative flex justify-center mb-10">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>
            <span className={`relative z-10 bg-white dark:bg-black px-6 text-xl ${params.textStyle}`}>
                {params.title}
            </span>
        </span>
    );
}