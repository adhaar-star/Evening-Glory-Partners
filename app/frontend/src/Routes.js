import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { EmailVerificationLandingPage } from './pages/EmailVerificationLandingPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';
import { AdminLogInPage } from './pages/admin/AdminLoginPage'
import { PasswordResetLandingPage } from './pages/PasswordResetLandingPage';
import { PleaseVerifyEmailPage } from './pages/PleaseVerifyEmailPage';
import { PrivateRoute } from './auth/PrivateRoute';
import { AdminPrivateRoute } from './admin/PrivateRoute';
import { AdminUserList } from './pages/admin/AdminUserList';
import { AdminDeclineUser } from './pages/admin/AdminDeclineUser';
import { UserList } from './pages/UserList';
import { Requests } from './pages/Requests';
import { RequestsSent } from './pages/RequestsSent';
import { Friends } from './pages/Friends';
import { AcceptedMe } from './pages/AcceptedMe';
import { Declines } from './pages/Declines';
import { DeclinedMe } from './pages/DeclinedMe';
import { Main } from './pages/Main';
export const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route path="/verify-email/:verificationString">
                    <EmailVerificationLandingPage />
                </Route>
                <Route path="/forgot-password">
                    <ForgotPasswordPage />
                </Route>
                <Route path="/admin/login">
                    <AdminLogInPage />
                </Route>
                <AdminPrivateRoute path="/admin/userlist/decline/:id">
                    <AdminDeclineUser />
                </AdminPrivateRoute>
                <AdminPrivateRoute path="/admin/userlist">
                    <AdminUserList />
                </AdminPrivateRoute>
                
                <PrivateRoute path="/requestsReceived">
                    <Main current="requests"/>
                
                </PrivateRoute>
                <PrivateRoute path="/requestsSent">
                <Main current="requestssent"/>
                </PrivateRoute>

                <PrivateRoute path="/iAccepted">
                <Main current="friends"/>
                </PrivateRoute>
                <PrivateRoute path="/AcceptedMe">
                <Main current="acceptedme"/>
                </PrivateRoute>

                <PrivateRoute path="/iDeclined">
                <Main current="declines"/>
                </PrivateRoute>
                <PrivateRoute path="/DeclinedMe">
                <Main current="declinedme"/>
                </PrivateRoute>

                <PrivateRoute path="/userlist">
                    <UserList />
                </PrivateRoute>
                <Route path="/reset-password/:passwordResetCode">
                    <PasswordResetLandingPage />
                </Route>
                <Route path="/please-verify">
                    <PleaseVerifyEmailPage />
                </Route>
                <Route path="/signup">
                    <SignUpPage />
                </Route>
                <Route path="/">
                    <LogInPage />
                </Route>
            </Switch>
        </Router>
    );
}