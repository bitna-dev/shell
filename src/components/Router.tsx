import LoginPage from "@pages/users";
import SignupPage from "@pages/users/signup";
import Home from "@pages/home";
import NotificationPage from "@pages/notifications";
import PostListPage from "@pages/posts";
import PostDetailPage from "@pages/posts/detail";
import PostEditPage from "@pages/posts/edit";
import ProfilePage from "@pages/profile";
import ProfileEditPage from "@pages/profile/edit";
import SearchPage from "@pages/search";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/posts" element={<PostListPage />} />
			<Route path="/posts/:id" element={<PostDetailPage />} />
			<Route path="/posts/edit/:id" element={<PostEditPage />} />
			<Route path="/profile" element={<ProfilePage />} />
			<Route path="/profile/edit" element={<ProfileEditPage />} />
			<Route path="/search" element={<SearchPage />} />
			<Route path="/notifications" element={<NotificationPage />} />
			<Route path="/users/login" element={<LoginPage />} />
			<Route path="/users/signup" element={<SignupPage />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default Router;
