const TestPage = () => {
    return ( 
        <>
        <div className="text-center ">
            <h2>
                This is a test of how a text area works 
            </h2>
            <textarea value={"This is test one"} className="w-3/4 h-[40rem] resize-none" />
            <p contentEditable={true} spellCheck={true} >Can you really save this and edit it?</p>
        </div>
        </>
     );
}
 
export default TestPage;