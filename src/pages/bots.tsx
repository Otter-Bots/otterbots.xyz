import { useParams } from "@solidjs/router";
import { Component, Match, Switch} from "solid-js";
import BotsLayout from "../components/bots/layout.jsx";
import { Layout } from "../components/shared/Layout.jsx";

const Bots: Component = () => {
    const params = useParams();
    return (
        <Layout>
            <Switch fallback={<h1>404</h1>}>
                <Match when={params.bot === "starboard"}>
                    <BotsLayout
                        name="starboard"
                        inviteUrl=""
                        implemented={true}
                        commands={[
                            {
                                name: "config channel",
                                slashy: true,
                                arguments: [
                                    {
                                        name: "selector",
                                        type: "channel",
                                        required: true,
                                        description: "The channel that will be used for starboard messages",
                                    }
                                ]
                            },
                            {
                                name: "config stars",
                                slashy: true,
                                arguments: [
                                    {
                                        name: "amount",
                                        type: "number",
                                        required: true,
                                        description: "The amount of stars required to be added to the starboard",
                                    }
                                ]
                            },
                            {
                                name: "config webhook",
                                slashy: true,
                                arguments: [
                                    {
                                        name: "enabled",
                                        type: "boolean",
                                        required: true,
                                        description: "Whether or not to use a webhook for starboard messages",
                                    },
                                    {
                                        name: "url",
                                        type: "string",
                                        required: false,
                                        description: "The webhook url to use for starboard messages",
                                    }
                                ]
                            },
                            {
                                name: "stats",
                                slashy: true,
                            }
                        ]}
                        permissions={[]}
                    />
                </Match>
                <Match when={params.bot === "support"}>
                    <BotsLayout
                        name="support"
                        inviteUrl=""
                        implemented={false}
                        commands={[]}
                        permissions={[]}
                    />
                </Match>
                <Match when={params.bot === "roles"}>
                    <BotsLayout
                        name="roles"
                        inviteUrl=""
                        implemented={false}
                        commands={[]}
                        permissions={[]}
                    />
                </Match>
                <Match when={params.bot === "stocks"}>
                    <BotsLayout
                        name="stocks"
                        inviteUrl=""
                        implemented={false}
                        commands={[]}
                        permissions={[]}
                    />
                </Match>
                <Match when={params.bot === "ikeastock"}>
                    <BotsLayout
                        name="ikeastock"
                        inviteUrl=""
                        implemented={true}
                        commands={[
                            {
                                name: "check",
                                slashy: true,
                                arguments: [
                                    {
                                        name: "productid",
                                        type: "string",
                                        required: true,
                                        description: "The id of the item to check the stock of",
                                    },
                                    {
                                        name: "countrycode",
                                        type: "string",
                                        required: true,
                                        description: "The country code of the country to check the stock of",
                                    }
                                ]
                            }
                        ]} />
                </Match>
            </Switch>
        </Layout>
    )
}
export default Bots;