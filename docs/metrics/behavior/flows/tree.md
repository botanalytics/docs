---
sidebar_position: 2
sidebar_label: Tree
hide_title: true
---

## Flows Tree

A flows tree graph for a chatbot, with nodes representing intents, chatbot actions, events/composite events, fallback, exit (when users leave the conversation due to non-completed tasks), escalation, and built-in events, is a visual representation that illustrates the flow of interactions within a chatbot's conversation space in a hierarchical tree-like structure. Unlike a Sankey graph that shows transitions between nodes, a tree graph focuses on displaying the chatbot's conversation structure, making it easier to understand the hierarchy of intents, actions, and events. 

Here's how to interpret and understand this tree graph

### Nodes

#### Intents

Intents represent the user's purpose or goal behind their input. Each intent reflects a specific user request or inquiry, such as "Book a Flight," "Check Account Balance," or "Order Pizza."

#### Chatbot Actions

Chatbot actions are the specific tasks or operations that the chatbot performs to fulfill user requests. These actions include actions like "Retrieve Flight Options," "Process Payment," or "Retrieve Weather Information."

#### Events/Composite Events

Events represent specific triggers or occurrences within the conversation that may lead to particular actions or transitions. Events can include user expressions and other contextual cues. For instance, "User Asks for Help," "User Expresses Frustration,".

Composite events are combinations of intents, events, and built-in events that represent complex user input or scenarios. These events may be part of a sentence or composition of other intents, events, and built-in events. For example, "Change Flight Date" could be a composite event comprising the intent "Modify Booking," the event "Change Date," and a built-in event like "Message Delivered."

#### Fallback

Fallback represents a state where the chatbot is unable to understand or determine the user's intent from their input. It typically triggers a default or general response seeking clarification or providing assistance.

#### Exit (User Leaves Conversation) 

Exit represents a point in the conversation where the user decides to leave the interaction due to non-completed tasks or other reasons. It indicates the end of the conversation without resolution.

#### Escalation

Escalation represents a transition where the conversation is passed on or escalated to a human agent or a higher level of support due to complexity, user request, or other specific criteria.

#### Built-In Events

Built-in events are system-generated events that are not directly initiated by the user but are part of the chatbot platform's functioning. Examples include "Message Delivered" (indicating the delivery of a chat message) and "Message Read" (indicating that the user has read a message).


### Tree Structure

In the tree graph, nodes are organized hierarchically, with intents, actions, events, composite events, and built-in events forming branches and sub-branches of the conversation tree.

### Branches and Sub-Branches

The graph visually shows how different intents, actions, events, and other nodes are connected and organized within the conversation flow. Each branch represents a specific user interaction path.

### Colors and Labels

Colors and labels can be used to differentiate between the different types of nodes (intents, chatbot actions, composite events, events, built-in events, fallback, exit, escalation) and help in understanding the graph more easily.

### Interpreting a Flows Tree Graph for a Chatbot

#### Conversation Structure

The tree graph offers a clear view of the hierarchy and structure of the chatbot's conversation. It shows how different intents, actions, and events are organized within the conversation flow.

#### Fallback and Escalation Paths

The tree graph highlights the paths that lead to fallback responses and escalation to human agents, providing insights into the chatbot's response strategies.

#### Exit Points Analysis

It helps in identifying where users commonly leave the conversation due to non-completed tasks or other reasons. This information is valuable for improving user engagement and task completion.

#### Event-Driven Behavior

The graph also indicates how different events, including user-generated and system events, influence the flow of the conversation and trigger specific actions.

### Use Cases for Flows Tree Graph Analysis

#### Chatbot Conversation Design

Developers and designers can use the tree graph to visualize and refine the chatbot's conversation structure, making it more intuitive and user-friendly.

#### Exit Point Optimization

Analysis of exit nodes helps in identifying reasons why users leave the conversation and allows for improvements to enhance user engagement and task completion.

#### User Experience Enhancement

Insights from the graph help in optimizing the user experience by addressing issues related to conversation flow and engagement.

#### Training and Development

Developers can use this analysis to train the chatbot to handle various conversation paths and events more effectively.

In summary, a flows tree graph for a chatbot, considering nodes as intents, chatbot actions, events/composite events, fallback, exit (user leaves conversation due to non-completed tasks), escalation, and built-in events, provides a visual representation of the chatbot's conversation structure and flow. It helps in understanding how different nodes are connected and organized within the chatbot's
