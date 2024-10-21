import React from "react";
import MainLayout from "../../layouts/MainLayout";
import CreateStakingToken from "../../components/CreateStakingToken";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

const CreateStakingTokenPage = () => {
    return (
        <div className="bg-gradient-to-bl from-[#060136] to-[#2A1A57] min-h-screen">
            <Navbar />
            <CreateStakingToken />
            <Footer />
        </div>
    );
};

export default CreateStakingTokenPage;
