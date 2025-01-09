import NextLink from "./NextLink.vue"

export default {
    title: "Components/Content/NextLink",
    component: NextLink
}

export const Default = {
    render: () => ({
        components: {NextLink},
        template: `
            <NextLink>
                <a href="#">Next Page</a>
            </NextLink>
        `
    })
} 