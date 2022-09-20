import { redirect } from "@sveltejs/kit";

export function load({params}){
    console.log(params.slug);
    throw redirect(301, '/')
}