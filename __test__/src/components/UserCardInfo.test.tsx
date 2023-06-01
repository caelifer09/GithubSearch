import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import UserCardInfo from "@/components/UserCardInfo";
import { User } from '@/interface/User'

describe('it should render propelty', () => {
    const usuario: User = {
        login: "caelifer09",
        id: 96829024,
        node_id: "U_kgDOBcV-YA",
        avatar_url: "https://avatars.githubusercontent.com/u/96829024?v=4",
        url: "https://api.github.com/users/caelifer09",
        gravatar_id: "",
        html_url: "",
        followers_url: "",
        following_url: "",
        gists_url: "",
        starred_url: "",
        subscriptions_url: "",
        organizations_url: "",
        repos_url: "",
        events_url: "",
        received_events_url: "",
        type: "",
        site_admin: false,
        name: "",
        blog: "",
        hireable: false,
        bio: "",
        public_repos: 0,
        public_gists: 0,
        followers: 0,
        following: 0,
        created_at: "",
        updated_at: ""
    }

    it('Everything is in the document', () => {
        render(<UserCardInfo usuario={usuario} />)

        const ImageE = screen.getByRole('img');
        expect(ImageE).toBeInTheDocument();
        
        const loginE = screen.getByText(/@/i)
        expect(loginE).toBeInTheDocument()

    });
});