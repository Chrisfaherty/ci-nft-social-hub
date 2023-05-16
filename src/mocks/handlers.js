import { rest } from "msw"

const baseURL = 'https://ci-nft-social-hub-api.herokuapp.com/'

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req,res,ctx) => {
        return res(
            ctx.json({"pk":5,"username":"admin1",
            "email":"","first_name":"",
            "last_name":"","profile_id":5,
            "profile_image":
            "https://res.cloudinary.com/djiqea4sz/image/upload/v1/media/../ci-nft-social-hub/default_profile_mwct0j.jpg",
        })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
        return res(ctx.status(200));
    }),
];