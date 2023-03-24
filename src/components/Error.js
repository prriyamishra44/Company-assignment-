import Sidebar from "./Sidebar";
function ErrorPage(){
    return<>
    <Sidebar/>
    <main>
    <h1>An error occured!</h1>
        <p>
           Could not find this page!
        </p>
    </main>
    </>
}
export default ErrorPage;