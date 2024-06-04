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
	Unauthorized
} from "@/pages";

const router = createBrowserRouter([
   {
        path: "/",
        element: <App />,
        errorElement: <PageNotFound />,
        children: [
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