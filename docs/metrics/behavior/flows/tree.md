---
sidebar_position: 2
sidebar_label: Tree
hide_title: true
---


import FlowsTree from '@site/static/img/metrics/Flows-Tree.png';


## Flows Tree

A flows tree graph for a chatbot, with nodes representing intents, chatbot actions, events/composite events, fallback, exit (when users leave the conversation due to non-completed tasks), escalation, and built-in events, is a visual representation that illustrates the flow of interactions within a chatbot's conversation space in a hierarchical tree-like structure. Unlike a Sankey graph that shows transitions between nodes, a tree graph focuses on displaying the chatbot's conversation structure, making it easier to understand the hierarchy of intents, actions, and events.

   <img src={FlowsTree} alt="FlowsTree" />


### Interpreting and Understanding the Tree Graph

#### Nodes

**Intents:**
Represent the user's purpose or goal behind their input, such as "Book a Flight" or "Check Account Balance."

**Chatbot Actions:**
Specific tasks or operations that the chatbot performs to fulfill user requests, like "Retrieve Flight Options" or "Process Payment."

**Events/Composite Events:**
Triggers or occurrences within the conversation, including user expressions and contextual cues. Composite events combine multiple intents, events, and built-in events, like "Change Flight Date."

**Fallback:**
Represents a state where the chatbot is unable to understand the user's intent and triggers a default response.

**Exit (User Leaves Conversation):**
Indicates when the user decides to end the interaction without completion.

**Escalation:**
Transition where the conversation is passed on to a human agent or higher support level.

**Built-In Events:**
System-generated events like "Message Delivered" or "Message Read."

### Tree Structure

Nodes are organized hierarchically in the tree graph, forming branches and sub-branches of the conversation tree.

### Branches and Sub-Branches

The graph visually shows how different intents, actions, events, and other nodes are connected and organized within the conversation flow, with each branch representing a specific user interaction path.

### Colors and Labels

Different colors and labels are used to differentiate between types of conversation elements, aiding in understanding the graph.

### Interpreting a Flows Tree Graph for a Chatbot

#### Conversation Structure

The tree graph offers a clear view of the hierarchy and structure of the chatbot's conversation, illustrating how different elements are organized within the flow.

#### Fallback and Escalation Paths

Highlighted paths show where fallback responses and escalation to human agents occur, providing insights into the chatbot's response strategies.

#### Exit Points Analysis

Identification of common exit points helps in improving user engagement and task completion.

#### Event-Driven Behavior

Indicates how events influence the flow of the conversation and trigger specific actions.

### Use Cases for Flows Tree Graph Analysis

#### Chatbot Conversation Design

Visualize and refine the conversation structure to make it more intuitive and user-friendly.

#### Exit Point Optimization

Improve user engagement and task completion by addressing issues related to exit points.

#### User Experience Enhancement

Optimize the user experience by addressing flow and engagement issues.

#### Training and Development

Train the chatbot to handle various conversation paths and events more effectively.

### Summary

In summary, a flows tree graph for a chatbot provides a visual representation of the conversation structure and flow, aiding in understanding how different nodes are connected and organized within the chatbot's interactions.
