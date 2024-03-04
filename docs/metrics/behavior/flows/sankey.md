---
sidebar_position: 1
sidebar_label: Sankey
hide_title: true
---

import FlowsSankey from '@site/static/img/metrics/Flows-Sankey.png';


## Flows Sankey

A flows Sankey graph for a chatbot, where nodes represent intents, chatbot actions, composite events, events, fallback, exit, escalation, and built-in events, is a complex visual representation that illustrates the flow of interactions within a chatbot's conversation space. This specialized Sankey graph offers a comprehensive view of how users interact with the chatbot, how intents and actions are handled, and how various events and built-in events influence the chatbot's behavior.


   <img src={FlowsSankey} alt="FlowsSankey" />


### Interpreting and Understanding the Flows Sankey Graph

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

#### Flows

Represent the movement between nodes and illustrate the logical progression of the conversation.

#### Width of Flow Lines

Indicates the volume or frequency of transitions between nodes, with thicker lines indicating more transitions.

#### Colors and Labels

Differentiate between node types and aid in understanding the graph.

### Interpreting Insights from the Flows Sankey Graph

#### Complex Interaction Patterns

Identify intricate patterns involving multiple intents, events, actions, and built-in events.

#### Fallback and Escalation Handling

Highlight points where the chatbot falls back or escalates the conversation, influenced by user inputs and system events.

#### Exit Points Analysis

Identify common reasons why users leave conversations to enhance engagement and task completion.

#### Event-Driven Behavior

Optimize event-based responses by understanding how events trigger actions or transitions.

#### User Interaction Insights

Gain insights into user engagement, common intents/actions, and emotional expressions.

### Use Cases for Flows Sankey Graph Analysis

#### Chatbot Performance Optimization

Optimize understanding and responses based on complex flow patterns and event influences.

#### Exit Point Management

Identify reasons for user exits to enhance engagement and task completion rates.

#### Escalation Management

Fine-tune criteria and processes for conversation escalations to human agents.

#### User Experience Enhancement

Optimize user experience by addressing challenges and frustrations in conversation design.

#### Training and Development

Train chatbots to handle various scenarios effectively based on analysis insights.

### Summary

In summary, a flows Sankey graph for a chatbot offers a comprehensive visual representation of complex interactions, aiding in understanding user engagement patterns, intents, actions, and event handling. Insights derived from the graph contribute to improvements in chatbot performance and user experience.
