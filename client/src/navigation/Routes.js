import {BrowserRouter, Route, Switch} from "react-router-dom";
import Admin from "../layouts/Admin";
import Auth from "../layouts/Auth";
import Landing from "../views/Landing";
import LogLanding from "../views/Loglanding";
import Profile from "../views/Profile";
import ViewScheduled from "../components/Appointment/ViewScheduled";
import Schedule from "../components/Appointment/schedule";
import ViewRequests from "../components/Appointment/ViewRequests";
import ViewConfirmed from "../components/Appointment/ViewConfirmed";
import UserView from "../components/Appointment/UserView";
import UserBooking from "../components/Appointment/UserBooking";
import AddNotice from "../components/Notice/AddNotice";
import NoticeTable from "../components/Notice/noticeView";
import AllNotice from "../components/Notice/AllNoticeView";
import AddMessage from "../components/Notice/AddMessage";
import MessageView from "../components/Notice/MessageView";
import AllMessageView from "../components/Notice/AllMessageView";
import Receive from "../components/Finance/CashReceive";
import Expense from "../components/Finance/AddExpenses";
import PettyCash from "../components/Finance/ViewPettycash";
import AddForum from "../components/Forum/AddForum";
import AddNewForum from "../components/Forum/AddNewForum";
import ForumTable from "../components/Forum/ForumView";
import ForumView from "../components/Pages/Formpage";
import Fund from "../components/Finance/ViewFund";
import ReceivedFund from "../components/Finance/AddReceivedfund";
import AllocateFund from "../components/Finance/AllocateFund";
import Donation from "../components/Finance/ViewDonation";
import AddDonation from "../components/Finance/AddDonation";
import ConstMaterial from "../components/Material/ConstMaterial";
import AddnewconstMaterial from "../components/Material/AddnewconstMaterial";
import AddconstMaterial from "../components/Material/AddconstMaterial";
import SupplyconstMaterial from "../components/Material/SupplyconstMaterial";
import ViewSupplyConst from "../components/Material/ViewSuppliedconstMaterial";
import AgriMaterial from "../components/Material/AgriMaterial";
import AddnewagriMaterial from "../components/Material/AddnewagriMaterial";
import AddagriMaterial from "../components/Material/AddagriMaterial";
import SupplyagriMaterial from "../components/Material/SupplyagriMaterial";
import ViewSupplyAgri from "../components/Material/ViewSuppliedagriMaterial";
import OtherMaterial from "../components/Material/OtherMaterial";
import AddnewotherMaterial from "../components/Material/AddnewotherMaterial";
import AddotherMaterial from "../components/Material/AddotherMaterial";
import SupplyotherMaterial from "../components/Material/SupplyotherMaterial";
import ViewSupplyOther from "../components/Material/ViewSuppliedotherMaterial";
import Const from "../components/Material/Users/Const";
import Agri from "../components/Material/Users/Agri";
import Other from "../components/Material/Users/Other";
import CardPageVisitsCheck from "../components/Cards/CardPageVisitsCheck";
import React from "react";
import {NAVIGATION_ROUTES} from "./constant/NavigationRoutes";
import {AuthRoute} from "./route/AuthRoute";
import {ProtectedRoute} from "./route/ProtectedRoute";
import {People} from "../views/admin/People/People";
import {AddPeople} from "../views/admin/People/components/AddPeople";
import {VotersList} from "../views/admin/People/VotersList";
import {Chat} from "../views/admin/Chat/Chat";
import {ComplaintsController} from "../views/admin/Complaints/controller/ComplaintsController";
import AddForm from "../components/FormTemplate/AddForms";
import FormTemplateView from "../components/FormTemplate/FormTemplateView";
import ActiveForms from "../components/FormTemplate/ActiveForms";
import UserFormView from "../components/FormTemplate/UserFormView";
import Donate2 from "../components/Donation/donate2";


// Projects
import PresentProject from "components/Projects/PresentProjects";
import FutureProject from "components/Projects/FutureProject";
import PastProject from "components/Projects/PastProject";
import AddProjects from "components/Projects/AddProjects";
import EditProjects from "components/Projects/EditProject";
// Users
import UserFutureProject from "components/Projects/Users/UserFutureProject";
import UserPresentProject from "components/Projects/Users/UserPresentProject";
import UserPastProject from "components/Projects/Users/UserPastProject";



const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                {/* add routes with layouts */}
                <AuthRoute path={NAVIGATION_ROUTES.admin} component={Admin} />
                <ProtectedRoute path={NAVIGATION_ROUTES.auth} component={Auth} />
                {/* add routes without layouts */}
                <Route path={NAVIGATION_ROUTES.landing} exact component={Landing} />
                <AuthRoute path={NAVIGATION_ROUTES.logLanding} exact component={LogLanding} />
                <AuthRoute path={NAVIGATION_ROUTES.Guestprofile} exact component={Profile} />
                {/*<AuthRoute path={NAVIGATION_ROUTES.complaints} exact component={ComplaintsController} />*/}
                <Route path="/" exact component={Landing} />
                {/* add redirect for first page */}
                {/* <Redirect from="*" to="/" /> */}
                <AuthRoute path={NAVIGATION_ROUTES.peopleManagement} exact component={People} />
                <AuthRoute path={NAVIGATION_ROUTES.addPeople} exact component={AddPeople} />
                <AuthRoute path={NAVIGATION_ROUTES.votersList} exact component={VotersList} />
                <AuthRoute path={NAVIGATION_ROUTES.chat} exact component={Chat} />

                {/* Appointment  */}
                <AuthRoute path="/ViewScheduled"  component={ViewScheduled} />
                <AuthRoute path="/schedule"  component={Schedule} />
                <AuthRoute path="/ViewRequests"  component={ViewRequests} />
                <AuthRoute path="/ViewConfirmed"  component={ViewConfirmed} />
                <AuthRoute path="/UserView"  component={UserView} />
                <AuthRoute path="/UserBooking"  component={UserBooking} />

                {/* FormTemplate */}
                <Route path="/AddForms"  component={AddForm} />
                <Route path="/FormTemplateView"  component={FormTemplateView} />
                <Route path="/ActiveForms"  component={ActiveForms} />
                <Route path="/UserFormView"  component={UserFormView} />

                {/* Notices */}
                <AuthRoute path="/AddNotice"  component={AddNotice} />
                <AuthRoute path="/noticeView"  component={NoticeTable} />
                <AuthRoute path="/AllNoticeView"  component={AllNotice} />
                {/* sms */}
                <AuthRoute path="/AddMessage"  component={AddMessage} />
                <AuthRoute path="/MessageView"  component={MessageView} />
                <AuthRoute path="/AllMessageView"  component={AllMessageView} />

                {/* FINANCE */}
                {/* Petty Cash */}
                <AuthRoute path="/CashReceive" component={Receive}/>
                <AuthRoute path="/AddExpenses" component={Expense}/>
                <AuthRoute path="/ViewPettycash" component={PettyCash}/>

                {/* Forum */}
                <AuthRoute path="/AddForum" component={AddForum}/>
                <AuthRoute path="/AddNewForum" component={AddNewForum}/>
                <AuthRoute path="/forumView" component={ForumTable}/>
                <AuthRoute path="/Forumpage" component={ForumView}/>

                {/* Fund */}
                <AuthRoute path="/ViewFund" component={Fund}/>
                <AuthRoute path="/AddReceivedfund" component={ReceivedFund}/>
                <AuthRoute path="/AllocateFund" component={AllocateFund}/>
                {/* <Route path="/CardPageVisits" component={CardPageVisits}/> */}

                {/* Donation */}
                <Route path="/ViewDonation" component={Donation}/>
                <Route path="/AddDonation" component={AddDonation}/>
                <Route path="/donate2" component={Donate2}/>
                {/* <Route path="/viewwdonation" component={ViewDonation}/> */}
                {/* Material */}
                {/* Const Material */}
                <AuthRoute path="/ConstMaterial" component={ConstMaterial}/>
                <AuthRoute path="/AddnewconstMaterial" component={AddnewconstMaterial}/>
                <AuthRoute path="/AddconstMaterial" component={AddconstMaterial}/>
                <AuthRoute path="/SupplyconstMaterial" component={SupplyconstMaterial}/>
                <AuthRoute path="/ViewSuppliedconstMaterial" component={ViewSupplyConst}/>

                {/* Agri Material */}
                <AuthRoute path="/AgriMaterial" component={AgriMaterial}/>
                <AuthRoute path="/AddnewagriMaterial" component={AddnewagriMaterial}/>
                <AuthRoute path="/AddagriMaterial" component={AddagriMaterial}/>
                <AuthRoute path="/SupplyagriMaterial" component={SupplyagriMaterial}/>
                <AuthRoute path="/ViewSuppliedagriMaterial" component={ViewSupplyAgri}/>

                {/* Other Material */}
                <AuthRoute path="/OtherMaterial" component={OtherMaterial}/>
                <AuthRoute path="/AddnewotherMaterial" component={AddnewotherMaterial}/>
                <AuthRoute path="/AddotherMaterial" component={AddotherMaterial}/>
                <AuthRoute path="/SupplyotherMaterial" component={SupplyotherMaterial}/>
                <AuthRoute path="/ViewSuppliedotherMaterial" component={ViewSupplyOther}/>

                {/* Users(Material) */}
                <AuthRoute path ="/Users/Const" component={Const}/>
                <AuthRoute path ="/Users/Agri" component={Agri}/>
                <AuthRoute path ="/Users/Other" component={Other}/>

                {/* Projects */}
                 <Route path="/PresentProjects" component={PresentProject}/>
                    <Route path="/FutureProject" component={FutureProject}/>
                    <Route path="/PastProject" component={PastProject}/>
                    <Route path="/AddProjects" component={AddProjects}/>
                    <Route path="/EditProject/:id" component={EditProjects}/>
                {/* Users */}
                    <Route path="/UserFutureProject" component={UserFutureProject}/>
                    <Route path="/UserPresentProject" component={UserPresentProject}/>
                    <Route path="/UserPastProject" component={UserPastProject}/>

                


                <AuthRoute path="/CardPageVisitsCheck" component={CardPageVisitsCheck}/>
                {/* <Route path="/CardPageVisits" component={CardPageVisits}/> */}
            </Switch>
        </BrowserRouter>
    )
}




export default Routes;
