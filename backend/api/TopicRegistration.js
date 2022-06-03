import TopicRegistration from "../models/TopicRegistration.model.js";

export const registerTopic = async (topic) => {
    const newTopic = await new TopicRegistration(topic)
    newTopic.save()
    return newTopic
}