using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SignalR.Hubs;

namespace SignalRChat.Hubs
{
    [HubName("ChatHub")]
    public class ChatHub : Hub
    {
        // Send message
        public void Distribute(string user, string message)
        {
            Clients.addMessage(user, message);
        }
    }
}