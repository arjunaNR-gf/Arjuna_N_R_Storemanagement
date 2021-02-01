using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using StoreManagement.Models;

namespace StoreManagement.Controllers
{
	public class LoginController : ApiController
	{
		// GET api/<controller>
		StoreManagementEntities lg = new StoreManagementEntities();

		public IEnumerable<Login> Getalldata()
		{
			
			return lg.Logins.ToList();

		}


		public IEnumerable<Login> Getdetails(String type)
		{
			var l = from s in lg.Logins where s.Type == type select s;
			return l.ToList();
			
		}
	
		public IEnumerable<Login> Get(String userid)
		{
			var l = from s in lg.Logins where s.Userid==userid select s;
			return l.ToList();

		}

		// GET api/<controller>/5
		[HttpGet]
		public object Get(String userid ,String password)
		{
			Login username = lg.Logins.Find(userid);
			if(username != null )
			{
		
				if (username.Password==password)
				{
					return new Response
					{
						Status = "SignIn",
					};
				}
				else
				{
					return new Response
					{
						Status = "Invalid Password",
					};
				}
			}
			else
			{
				return new Response
				{
					Status = "Invalid UserId",
				};
			}
		}

		// POST api/<controller>
		public object Post(Login u)
		{
			try
			{

				lg.Logins.Add(u);
				lg.SaveChanges();
				return new Response
				{
					Status = "added",
				};

			}
			catch (Exception ex)
			{

				Console.Write(ex.Message);
				return new Response
				{
					Status = "Error",
				};

			}

		}

		// PUT api/<controller>/5
		public object Put(string userid, Login u)
		{
			try
			{
				if (userid == u.Userid)
				{
					lg.Entry(u).State = System.Data.Entity.EntityState.Modified;
					lg.SaveChanges();
					return new Response
					{
						Status = "Updated",
					};

				}
				else
				{
					return new Response
					{
						Status = "opps",
					};

				}
			}
			catch (Exception e)
			{
				Console.Write("error");
			}

			return new Response
			{
				Status = "Error",
			};

		}

		// DELETE api/<controller>/5
		[HttpDelete]
		public object Delete(String userid)
		{
			Login u = lg.Logins.Find(userid);
			if (u != null)
			{
				lg.Logins.Remove(u);
				lg.SaveChanges();
				return new Response
				{
					Status = "delete"
				};
			}

			return new Response
			{
				Status = "Error"
			};

		}
	}
}