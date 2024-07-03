import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import {
	Login,
	CreditCards, 
	CreditCardDetails, 
	Transactions, 
	PageNotFound,
	Unauthenticated,
	Unauthorized,
	Dashboard,
	Crypto,
	Trades,
	Deposits,
	CryptoDashboard
} from "@/pages";

const router = createBrowserRouter([
   {
        path: "/",
        element: <App />,
        errorElement: <PageNotFound />,
        children: [
			{
				path: "/dashboard",
				element: <ProtectedRoute><Dashboard /></ProtectedRoute>
			},
			{
				path: "/creditCards",
				element: <ProtectedRoute><CreditCards /></ProtectedRoute>,
			},
			{
				path: "/creditCards/:creditCardUuid",
				element: <ProtectedRoute><CreditCardDetails /></ProtectedRoute>,
			},
			{
				path: "/creditCardTransactions/:creditCardUuid",
				element: <ProtectedRoute><Transactions /></ProtectedRoute>
			},
			{
				path: "/crypto",
				element: <ProtectedRoute><Crypto /></ProtectedRoute>
			},
			{
				path: "/crypto/dashboard",
				element: <ProtectedRoute><CryptoDashboard /></ProtectedRoute>
			},
			{
				path: "/crypto/trades",
				element: <ProtectedRoute><Trades /></ProtectedRoute>
			},
			{
				path: "/crypto/deposits",
				element: <ProtectedRoute><Deposits /></ProtectedRoute>
			}
        ]
   },
   {
		path: "/login",
		element: <Login />
   },
   {
		path: "/errors/unauthorized",
		element: <Unauthorized />
	},
	{
		path: "/errors/unauthenticated",
		element: <Unauthenticated />
	}
]);

export default router;