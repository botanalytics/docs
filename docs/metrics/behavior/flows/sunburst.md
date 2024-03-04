---
sidebar_position: 3
sidebar_label: Sunburst
hide_title: true
---

import FlowsSunburst from '@site/static/img/metrics/Flows-Tree.png';


## Flows Sunburst

A flows sunburst graph for a chatbot is a visual representation that displays the hierarchical structure of a chatbot's conversation components, including intents, chatbot actions, events/composite events, fallback, exit points (when users leave the conversation due to non-completed tasks), escalation, and built-in events (such as "message delivered" and "message read"). It takes the form of a sunburst, which consists of concentric rings radiating outward from a central point, each representing a level of hierarchy within the chatbot's conversation.

   <img src={FlowsSunburst} alt="FlowsSunburst" />


### Interpreting and Understanding the Sunburst Graph

#### Hierarchy Visualization

The sunburst graph organizes chatbot conversation elements hierarchically, with the central point representing the root of the hierarchy and the outer rings representing different levels of conversation elements.

#### Nodes and Rings

Each ring in the sunburst graph represents a level of the conversation hierarchy, with nodes placed within these rings to represent specific conversation elements.

#### Central Node

The central node typically represents the starting point of a conversation or a general context.

#### Outer Rings

Moving outward from the central node, each ring corresponds to a more specific level of the conversation. For example, the first outer ring might contain nodes representing high-level intents, while subsequent rings might contain nodes representing chatbot actions and events.

#### Nodes and Segments

Nodes within each ring are arranged as segments, with their size representing various attributes such as frequency of use, importance, or relevance.

#### Colors and Labels

Different colors and labels distinguish between types of conversation elements, aiding in understanding the composition of the chatbot's conversation.

### Interpreting a Sunburst Graph for a Chatbot

#### Hierarchy of Conversation

The sunburst graph provides a visual representation of how different conversation elements are organized within the chatbot's interactions, from the central node to the outer rings.

#### Relative Importance

The size or prominence of nodes within each ring can indicate the relative importance or frequency of usage of specific conversation elements. Larger nodes may represent more significant intents or actions.

#### Flow of Conversation

By following segments from the central node outward, users can track the flow of a conversation as it progresses through different intents, actions, events, and potential exit points.

#### Event-Driven Behavior

The sunburst graph highlights how events, both user-generated and system-generated, influence the flow and direction of the conversation, offering insights into event-driven behavior.

### Use Cases for Sunburst Graph Analysis

#### Conversation Structure Optimization

Designers and developers can optimize the structure and hierarchy of a chatbot's conversation based on insights from the sunburst graph, ensuring alignment with user needs and goals.

#### Identifying Exit Points

The graph helps identify common exit points where users leave the conversation, enabling improvements in user engagement and task completion.

#### Event-Driven Insights

Analysis of the graph provides insights into how events impact the chatbot's conversation flow and responses, aiding in event-driven optimization.

#### Visualizing Composition

The sunburst graph visually represents the composition of the chatbot's interactions, facilitating understanding of complexity and diversity in conversation elements.

### Summary

In summary, a sunburst graph for a chatbot offers a unique visual perspective on conversation hierarchy, composition, and flow, aiding in conversation design, optimization, and event-driven pattern identification.

