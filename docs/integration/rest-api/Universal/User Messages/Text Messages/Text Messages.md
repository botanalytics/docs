**Text Message**


The text message type represents a message sent by the user in a text format. It can contain plain text or various formatting options.

**Example**

Here's an example of a text message JSON:


```json
{
  "messages": [
    {
      "message": {
        "id": "{{$guid}}",
        "thread": {
          "id": "t1"
        },
        "conversation": {
          "id": "c1"
        },
        "timestamp": "{{$timestamp}}",
        "sender": {
          "id": "user-2",
          "type": "user"
        },
        "locale": "en-US",
        "content": {
          "texts": [
            {
              "text": "Order some Banana and orange and Strawberry!"
            }
          ]
        }
      }
    }
  ]
}
```



**Field Descriptions**

- `messages` (array): An array containing the user messages.
  - `message` (object): Represents an individual user message.
    - `id` (string): Unique identifier for the message.
    - `thread` (object): Contains information about the message thread.
      - `id` (string): Unique identifier for the thread.
    - `conversation` (object): Contains information about the conversation.
      - `id` (string): Unique identifier for the conversation.
    - `message` (object): Contains the actual message content.
      - `timestamp` (string): The timestamp when the message was sent.
      - `sender` (object): Contains information about the message sender.
        - `id` (string): Unique identifier for the sender.
        - `type` (string): Type of the sender, which is "user" in this case.
      - `locale` (string): The locale of the message.
      - `content` (object): Contains the content of the message.
        - `texts` (array): An array of text content.
          - `text` (string): The actual text content of the message.
